import { createRouter, createWebHashHistory } from 'vue-router'
import homeView from '../components/mainContent.vue'



const routes = [ {
    path: "/",
    name:'home',
    component: homeView
  },
  

]


const router = createRouter({history:createWebHashHistory(),routes})

export default router