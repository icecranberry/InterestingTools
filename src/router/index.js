import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/chouxiangsetu'
  },
  {
    path: '/chouxiangsetu',
    name: 'Chouxiangsetu',
    component: () => import('@/views/chouxiangsetu')
  }
]
const router = new VueRouter({
  mode: 'hash',
  routes
})
export default router
