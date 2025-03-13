import { createRouter,createWebHistory } from "vue-router"
import TheHome from "../components/TheHome.vue"
import TheLogin from "../components/TheLogin.vue"
import ProductShow from "../components/ProductShow.vue"
const routes = [
    {
        path:'/',
        name:'Home',
        component:TheHome
    },
    {
        path:'/login',
        name:'Login',
        component:TheLogin
    },
    {
        // กำหนดว่า route นี้รับ parameter ต้องระบุให้ตรงกันด้วย
        path:'/ProductShow/:pdId',
        name:'ProductShow',
        component:ProductShow
    },
]
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),routes
})
export default router