import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
Vue.use(VueRouter)

const routes = [{
    path: '',
    name: 'index',
    component: Home,
    children: [{
            path: '/',
            component: (resolve) => require(['@/views/home/index'], resolve)
        },
        {
            path: '/menu_1',
            component: (resolve) => require(['@/views/menu_1/index'], resolve)
        }
    ]
}]
const router = new VueRouter({
    routes
})

export default router