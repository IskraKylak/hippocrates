import { createStore } from 'vuex'
import home from './home'
import specializations from './specializations'
import events from './events'
import vebinar from './vebinar'
import vebinarSingle from './vebinarSingle'
import courses from './courses'
import coursesItem from './coursesItem'
import auth from './auth'
import contact from './contact'
import project from './project'
import search from './search'
import acc from './acc'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home,
    specializations,
    events,
    vebinar,
    vebinarSingle,
    courses,
    coursesItem,
    auth,
    contact,
    project,
    search,
    acc
  }
})
