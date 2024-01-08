import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import './assets/css/fonts.css'
import messagePlugin from './utils/message.plugin'

import { laguages } from './i18n'
import { defaultLocate } from './i18n'
import {createI18n, useI18n} from 'vue-i18n'

const messages = Object.assign(laguages)
const i18n = createI18n({
  legacy: true,
  locale: defaultLocate,
  fallbackLocale: 'en',
  messages
})

const app = createApp(App)
app.config.globalProperties.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token
}

// const app = createApp(App);
app.use(messagePlugin).use(store).use(router).use(VueAxios, axios).use(i18n);

router.beforeEach((to, from, next) => {
  const lang = to.params.lang || localStorage.getItem('lang') || 'en';
  i18n.global.locale = lang;
  next();
});
app.mount('#app');