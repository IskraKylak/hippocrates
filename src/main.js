import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import './assets/css/fonts.css'
import messagePlugin from './utils/message.plugin'

const app = createApp({})
app.config.globalProperties.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token
}
createApp(App).use(messagePlugin).use(store).use(router).use(VueAxios, axios).mount('#app')