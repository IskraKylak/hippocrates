import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/views/404.vue'

const routes = [
  {
    path: '/:lang/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('../views/home.vue')
  },
  {
    path: '/:lang/contacts',
    name: 'contacts',
    meta: { layout: 'main' },
    component: () => import('../views/contacts.vue')
  },
  {
    path: '/:lang/calendar',
    name: 'calendar',
    meta: { layout: 'main' },
    component: () => import('../views/calendar.vue')
  },
  {
    path: '/:lang/webinars',
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
    path: '/:lang/webinars/:Pid2',
    name: 'vebinarSingle',
    meta: { layout: 'main' },
    component: () => import('../views/vebinar-single.vue')
  },
  {
    path: '/:lang/courses',
    name: 'courses',
    meta: { layout: 'main' },
    component: () => import('../views/courses.vue')
  },
  {
    path: '/:lang/about',
    name: 'about',
    meta: { layout: 'main' },
    component: () => import('../views/about.vue')
  },
  {
    path: '/:lang/how-to',
    name: 'how-to',
    meta: { layout: 'main' },
    component: () => import('../views/how-to.vue')
  },
  {
    path: '/:lang/courses/:Pid1',
    name: 'coursesCatPage',
    meta: { layout: 'main' },
    props: route => ({ pid: route.query.params }),
    component: () => import('../views/courses-page.vue')
  },
  {
    path: '/:lang/course/:Pid2',
    name: 'courseSingle',
    meta: { layout: 'main' },
    component: () => import('../views/course-single.vue')
  },
  {
    path: '/:lang/course/:Pid2/test/',
    name: 'testCourse',
    meta: { layout: 'main' },
    component: () => import('../views/testCourse.vue')
  },
  {
    path: '/:lang/course/:courseId/test/:Pid3',
    name: 'testLesson',
    meta: { layout: 'main' },
    component: () => import('../views/testLesson.vue')
  },
  {
    path: '/:lang/login',
    name: 'login',
    meta: { layout: 'main' },
    component: () => import('../views/login.vue')
  },
  {
    path: '/:lang/register',
    name: 'register',
    meta: { layout: 'main' },
    component: () => import('../views/register.vue')
  },
  {
    path: '/:lang/search',
    name: 'search',
    meta: { layout: 'main' },
    component: () => import('../views/search.vue')
  },
  {
    path: '/:lang/webinars/:Pid4/test/',
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
