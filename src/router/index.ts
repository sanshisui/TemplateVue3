//创建路由
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        component: () => import('../App.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router