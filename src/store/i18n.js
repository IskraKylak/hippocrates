
export default {
    namespaced: true,
    state: {
      locale: 'ua' 
    },
    mutations: {
      setLocale(state, locale) {
        state.locale = locale
      }
    },
    actions: {
      setLocale({ commit }, locale) {
        commit('setLocale', locale)
      }
    }
  }
  