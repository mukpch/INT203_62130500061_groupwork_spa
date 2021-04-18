import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import aboutus from '../views/About.vue'

const routes = [{
    component: Home,
    path: "/",
    name: "home"
},
{
    component: aboutus,
    path: "/aboutus",
    name: "aboutus",
},

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router