import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
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
    props: route => ({ pid: route.query.params }),
    meta: { layout: 'main' },
    component: () => import('../views/vebinars-page.vue')
  },
  // {
  //   path: '/vebinars/:Pid1',
  //   name: 'vebinarsCatPage',
  //   meta: { layout: 'main' },
  //   component: () => import('../views/vebinars-page.vue')
  // },
  {
    path: '/vebinar/:Pid2',
    name: 'vebinarSingle',
    meta: { layout: 'main' },
    component: () => import('../views/vebinar-single.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    meta: { layout: 'main' },
    component: () => import('../views/courses.vue')
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
    path: '/courses/:Pid1',
    name: 'coursesCatPage',
    meta: { layout: 'main' },
    props: route => ({ pid: route.query.params }),
    component: () => import('../views/courses-page.vue')
  },
  {
    path: '/course/:Pid2',
    name: 'courseSingle',
    meta: { layout: 'main' },
    component: () => import('../views/course-single.vue')
  },
  {
    path: '/course/:Pid2/test/',
    name: 'testCourse',
    meta: { layout: 'main' },
    component: () => import('../views/testCourse.vue')
  },
  {
    path: '/course/:courseId/test/:Pid3',
    name: 'testLesson',
    meta: { layout: 'main' },
    component: () => import('../views/testLesson.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'main' },
    component: () => import('../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'main' },
    component: () => import('../views/register.vue')
  },
  {
    path: '/search',
    name: 'search',
    meta: { layout: 'main' },
    component: () => import('../views/search.vue')
  },
  {
    path: '/vebinars/:Pid4/test/',
    name: 'testVebinar',
    meta: { layout: 'main' },
    component: () => import('../views/testVebinar.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})
export default router
