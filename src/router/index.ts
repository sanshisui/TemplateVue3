//创建路由
import {createRouter, createWebHistory} from 'vue-router'



import page2 from '../components/page2.vue'
import page3 from '../components/page3.vue'
import layout from '../layout/layout.vue'

const routes = [
    {
        path: '/',
        redirect: '/page/page1',
    },
    {path: "/app", component: layout, children: [
            {path: "page1", component: () => import('../components/page1.vue')},
            {path: "page2", component: () => import('../components/page2.vue')},
            {path: "page3", component: page2},
        ],
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router