import { createStore } from 'vuex'
import home from './home'
import specializations from './specializations'
import events from './events'
import vebinar from './vebinar'
import vebinarSingle from './vebinarSingle'
import courses from './courses'
import coursesItem from './coursesItem'


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
    coursesItem
  }
})
