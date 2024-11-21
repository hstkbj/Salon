import { createRouter, createWebHistory } from "vue-router";

const routes = [
    //User Page
    {
        path:"/",
        component:() => import('./components/userPage/accueil.vue')
    },
    //Admin Page
    {
        path:'/admin',
        component:()=>import('./components/adminPage/home.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition){
        return savedPosition || {top:0}
    }
})

export default router