import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import User from '../views/user.vue'
import HomeView from '../views/HomeView.vue'
import Reserved from '../views/ReservedPage.vue'
import SingleMovie from '../views/singleMovie.vue'
import AboutQ from '../views/aboutQuests.vue'
import register from '../views/Register.vue'
import editpage from '../views/Editpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users/:username',
      name: 'user',
      component: User,
      props:true
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reserved/:username',
      name: 'reserve',
      component: Reserved,
      props:true
    },
    {
      path: '/movies/:id/:username',
      name: 'SingleMovie',
      component: SingleMovie,
      props:true
    },
    {
      path: '/aboutQuests',
      name: 'AboutQuests',
      component: AboutQ,
      props:true
    },
    {
      path: '/register',
      name: 'regiter',
      component: register,
      // props:true
    },
    {
      path: '/edit',
      name: 'edit',
      component: editpage,
      // props:true
    }
  ]
  
})

export default router
