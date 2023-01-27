<template>
    <div class="signinwindow-component" v-show="!authenticated">
        <!--Head Box-->
        <div id="switch-box" class="w-full">
            <button class="signinwindow-button" :disabled="general.switchmode==='login'"
                v-on:click="general.switchmode='login'">
                <p>Login</p>
            </button>
            <button class="signinwindow-button" :disabled="general.switchmode==='register'"
                v-on:click="general.switchmode='register'">
                <p>Register</p>
            </button>
        </div>
        <!--Login Window-->
        <div id="login-box" class="signinwindow-window signinwindow-text" v-show="general.switchmode==='login'">
            <div class="signinwindow-formarea">
                <form @submit.prevent="submitLogin">
                    <div>
                        <h1 class="signinwindow-formarea-label">Username</h1>
                        <input class="signinwindow-formarea-input" type="text" name="username" id="username"
                            v-model="loginForm.username" placeholder="username" />
                    </div>
                    <div>
                        <h1 class="signinwindow-formarea-label">password</h1>
                        <input class="signinwindow-formarea-input" type="password" name="password" id="passwrod"
                            v-model="loginForm.password" placeholder="password" />
                    </div>

                    <div id="login-response">
                        <div class="signinwindow-loading-box" v-show="this.loginForm.isLoading">
                            <p>loading...</p>
                        </div>
                        <div class="signinwindow-error-box" v-show="this.loginForm.errorCode == 12001">
                            <p>Incorrect username or password.</p>
                        </div>
                        <div class="signinwindow-error-box" v-show="this.loginForm.errorCode == -1">
                            <p>Server unavailable. :(</p>
                        </div>
                        <div class="signinwindow-ok-box" v-show="this.registerForm.isSuccess">
                            <p>Registered! Please login with your new user.</p>
                        </div>

                        
                    </div>

                    <div>
                        <button type="submit" class="signinwindow-formarea-button"
                            :disabled="this.loginForm.isLocked">Login</button>
                    </div>
                </form>
            </div>
        </div>
        <!--Register Window-->
        <div id="register-box" class="signinwindow-window signinwindow-text" v-show="general.switchmode==='register'">
            <div class="signinwindow-formarea">

                <RulesAndAgreement></RulesAndAgreement>

                <form @submit.prevent="submitRegister" class="mt-6">
                    <div>
                        <h1 class="signinwindow-formarea-label">Username</h1>
                        <input class="signinwindow-formarea-input" type="text" name="newusername" id="newusername"
                            v-model="registerForm.username" placeholder="username" />
                    </div>
                    <div>
                        <h1 class="signinwindow-formarea-label">Email</h1>
                        <input class="signinwindow-formarea-input" type="text" name="newuserEmail" id="newuserEmail"
                            v-model="registerForm.userEmail" placeholder="username" />
                    </div>
                    <div>
                        <h1 class="signinwindow-formarea-label">Password</h1>
                        <input class="signinwindow-formarea-input" type="password" name="new-password" id="new-password"
                            v-model="registerForm.userPassword" placeholder="username" />
                    </div>
                    <div>
                        <h1 class="signinwindow-formarea-label">Comfirmed Password</h1>
                        <input class="signinwindow-formarea-input" type="password" name="confirm-password"
                            id="confirm-password" v-model="registerForm.userComfirmedPassword"
                            placeholder="userComfirmedPassword" />
                    </div>
                    <div>
                        <h1 class="signinwindow-formarea-label">Discord Account</h1>
                        <input class="signinwindow-formarea-input" type="text" name="user-discord" id="user-discord"
                            v-model="registerForm.userDiscordAccount" placeholder="userComfirmedPassword" />
                    </div>
                    <!--Agreement Box-->
                    <div class="flex flex-col content-center mt-9">
                        <div class="flex flex-row">
                            <input class="mx-2 w-8" type="checkbox" v-model="this.registerForm.isAgreed" />
                            <p>I agree with the rules and agreements.</p>
                        </div>
                        <button type="submit" class="signinwindow-formarea-button"
                            :disabled="this.registerForm.isLocked || !this.registerForm.isAgreed ">SignUp</button>

                    </div>
                </form>

                <div id="register-response">
                    <div class="signinwindow-loading-box" v-show="this.registerForm.isLoading">
                        <p>loading...</p>
                    </div>
                    <div class="signinwindow-error-box" v-show="this.registerForm.errorCode == 11001">
                        <p>This username is taken.</p>
                    </div>
                    <div class="signinwindow-error-box" v-show="this.registerForm.errorCode == 11002">
                        <p>This email is taken.</p>
                    </div>
                    <div class="signinwindow-error-box" v-show="this.registerForm.errorCode == 11003">
                        <p>Email format is not valid.</p>
                    </div>
                    <div class="signinwindow-error-box" v-show="this.registerForm.errorCode == 11004">
                        <p>User name can only have alphabet or numbers.</p>
                    </div>
                    <div class="signinwindow-error-box" v-show="this.registerForm.errorCode == 11005">
                        <p>Password is too weak or way too strong.</p>
                    </div>
                    <div class="signinwindow-error-box" v-show="this.registerForm.errorCode == 11006">
                        <p>Your confirmed password does not match your password.</p>
                    </div>
                    <div class="signinwindow-error-box" v-show="this.registerForm.errorCode == -1">
                        <p>Server unavailable. :(</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div v-show="authenticated">
        <div class="signinwindow-component">
            <!--Head Box-->
            <div id="switch-box" class="w-full">
                <button class="signinwindow-button" disabled>
                    <p>Welcome back!</p>
                </button>
                <button class="signinwindow-button" disabled>
                    <p>:></p>
                </button>
            </div>
            <!--Login Window-->
            <div id="login-box" class="signinwindow-window signinwindow-text flex flex-col">
                <p class="py-2 px-5">Welcome back starlord! You've already logged in. You can go to your profile page or
                    sign out from
                    this location.</p>
                <button class="signinwindow-continue-btn">
                    Continue
                </button>
                <button class="signinwindow-continue-btn" v-on:click.prevent="submitSignOut()"
                    :disabled="this.signOut.isLocked">
                    Sign out
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import RulesAndAgreement from '@/components/information/RulesAndAgreement.vue'
    import {
        mapActions,
        mapGetters
    } from 'vuex'

    export default {
        components: {
            RulesAndAgreement
        },
        data() {
            return {
                what: 1,
                general: {
                    switchmode: 'login'
                },
                loginForm: {
                    username: 'naturegecko',
                    password: 'Malawi#NGG',
                    errorCode: 0,
                    isLoading: false,
                    isLocked: false
                },
                registerForm: {
                    username: '',
                    userEmail: '',
                    userPassword: '',
                    userComfirmedPassword: '',
                    userDiscordAccount: '',
                    errorCode: 0,
                    isAgreed: false,
                    isLoading: false,
                    isLocked: false,
                    isSuccess: false
                },
                signOutForm: {
                    isLocked: false
                }
            }
        },
        methods: {
            ...mapActions({
                signIn: 'authentication/signIn',
                signOut: 'authentication/signOut'
            }),

            async submitLogin() {
                this.registerForm.isSuccess = false
                this.loginForm.isLoading = true
                this.loginForm.isLocked = true
                this.loginForm.errorCode = 0
                //Call a store
                let result = await this.signIn(this.loginForm)

                this.loginForm.isLoading = false
                this.loginForm.errorCode = result.errorCodeResponse

                // If success, redirect.
                if (this.loginForm.errorCode == 0) {
                    this.$router.replace({
                        name: 'PlayerHomePage'
                    })
                }

                //No spaming button
                await setTimeout(() => {
                    this.loginForm.isLocked = false
                }, 3000)
            },
            async submitRegister() {
                this.registerForm.isLoading = true
                this.registerForm.isLocked = true
                this.registerForm.errorCode = 0
                let errorCodeResponse
                try {
                    await axios.post('/api/authentication/register', this.registerForm).then(() => {}, (error) => {
                        let errorCode = error.response.data.excaptionCode
                        errorCodeResponse = errorCode
                    })
                } catch (error) {
                    errorCodeResponse = -1
                }
                this.registerForm.isLoading = false
                this.registerForm.errorCode = errorCodeResponse
                this.registerForm.isSuccess = true
                this.general.switchmode = 'login'
                //No spaming button
                await setTimeout(() => {
                    this.registerForm.isLocked = false
                }, 3000)
            },
            async resetPassword() {

            },
            async submitSignOut() {
                this.signOutForm.isLocked = true;
                this.signOut();
            }
        },
        computed: {
            ...mapGetters({
                authenticated: 'authentication/authenticated',
                user: 'authenticated/user'
            })
        }
    }
</script>