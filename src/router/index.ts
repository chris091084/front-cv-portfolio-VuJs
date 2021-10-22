import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import NewUser from '../views/NewUser.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/newUser'
  },
  {
    path: '/newUser',
    name: 'NewUser',
    component: NewUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
