import {
    createRouter,
    createWebHistory
} from 'vue-router'

import axios from 'axios';
import HomeFirstPage from '../views/HomeFirstPage.vue';
import PlayerHomePage from '../views/player/PlayerHomePage.vue'
import store from '@/store';

axios.defaults.baseURL = 'http://localhost:8086'

const routes = [{
        path: '/',
        name: 'Homepage',
        component: HomeFirstPage,
    },
    {
        path: '/myAccount',
        name: 'PlayerHomePage',
        component: PlayerHomePage,
        beforeEnter: (to, from, next) => {
            if (!store.getters['authentication/authenticated']) {
                return next({
                    name: 'Homepage'
                })
            }
            next()
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router