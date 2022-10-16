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
    path: '/vebinars',
    name: 'vebinars',
    meta: { layout: 'main' },
    component: () => import('../views/vebinars.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    meta: { layout: 'main' },
    component: () => import('../views/courses.vue')
  },
  {
    path: '/vebinars/:Pid',
    name: 'vebinarPage',
    meta: { layout: 'main' },
    component: () => import('../views/vebinarPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { layout: 'main' },
    component: () => import('../views/about.vue')
  },
  {
    path: '/how-to',
    name: 'how-to',
    meta: { layout: 'main' },
    component: () => import('../views/how-to.vue')
  },
  {
    path: '/courses-page',
    name: 'courses-page',
    meta: { layout: 'main' },
    component: () => import('../views/courses-page.vue')
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
