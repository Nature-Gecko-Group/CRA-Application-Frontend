import axios from 'axios'

export default ({
    namespaced: true,
    state: {
        token: null,
        useraccount: null,
        authenticated: false,
        roles: null
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USERACCOUNT(state, useraccount) {
            state.useraccount = useraccount
        },
        SET_AUTHENTICATED(state, authenticated) {
            state.authenticated = authenticated
        },
        SET_ROLES(state, roles) {
            state.roles = roles
        }
    },
    getters: {
        authenticated(state) {
            return state.token && state.useraccount
        },
        userAccount(state) {
            return state.useraccount
        },
        roles(state) {
            return state.roles
        }
    },
    actions: {
        async signIn({
            dispatch
        }, credentials) {
            let result = {
                data: {},
                errorCodeResponse: 0,
                accessToken: ''
            };
            try {
                await axios.post('/api/authentication/login', credentials)
                    .then(async (response) => {
                        result.data = response.data
                        result.accessToken = response.data.accessToken
                        await dispatch('authenticationAttemp', result.accessToken)
                    }, (error) => {
                        result.errorCodeResponse = error.response.data.excaptionCode
                    })
            } catch (error) {
                result.errorCodeResponse = -1
            }
            return result
        },
        async authenticationAttemp({
            commit,
            state
        }, accessToken) {
            try {
                if (accessToken) {
                    commit('SET_TOKEN', accessToken)
                }
                if (!state.token) {
                    return
                }
                let result = await axios.get('/api/player/myProfile')
                commit('SET_USERACCOUNT', result.data)
                commit('SET_AUTHENTICATED', true)
                commit('SET_ROLES', result.data.roles)
            } catch (error) {
                commit('SET_TOKEN', null)
                commit('SET_USERACCOUNT', null)
                commit('SET_AUTHENTICATED', false)
                commit('SET_ROLES', null)
            }
        },
        async signOut({
            commit
        }) {
            return await axios.get('/api/authentication/signout').then(() => {
                commit('SET_USERACCOUNT', null)
                commit('SET_AUTHENTICATED', false)
                commit('SET_ROLES', null)
                commit('SET_TOKEN', null)
            })
        }
    }
})