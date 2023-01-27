import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/general.css'
import './styles/homepage.css'

require('@/store/subscriber')
store.dispatch('authentication/authenticationAttemp', localStorage.getItem('accessToken')).then(() => {
    createApp(App).use(store).use(router).mount('#app')
})