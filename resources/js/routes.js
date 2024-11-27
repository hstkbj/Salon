import { createRouter, createWebHistory } from "vue-router";

const routes = [
    //User Page
    {
        path:"/",
        component:() => import('./components/constant/ContentWrap.vue'),
        children:[
            {
                path:'',
                component: ()=>import('./components/userPage/accueil.vue')
            },
            {
                path:"/about-us",
                component:() => import('./components/userPage/abouts.vue')
            },
            {
                path:"/service",
                component:() => import('./components/userPage/service.vue')
            },
            {
                path:"/gallery",
                component:() => import('./components/userPage/gallery.vue')
            },
            {
                path:"/blog",
                component:() => import('./components/userPage/blog.vue')
            },
            {
                path:"/contact",
                component:() => import('./components/userPage/contact.vue')
            },
        ]
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