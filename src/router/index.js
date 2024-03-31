import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProyectosView from "../views/ProyectosView.vue"
import Tr from "@/i18n/translation"


const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: "/proyectos",
          name: "proyectos",
          component: ProyectosView
        }

      ]
    } 
  ]

})


export default router