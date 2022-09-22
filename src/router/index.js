import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/views/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('../views/home.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: { layout: 'main' },
    component: () => import('../views/contacts.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    meta: { layout: 'main' },
    component: () => import('../views/calendar.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})
export default router
