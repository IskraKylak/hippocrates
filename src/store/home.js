import axios from "axios";

export default {
    state: {
        home: [],
    },
    mutations: {
        SET_HOME(state, payload) {
            state.home = payload
        },
        
    },
    actions: {
        SET_HOME ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_HOME', payload)
        },
        GET_HOME_FROM_API({commit}, lang) {
            return axios(`https://asprof-test.azurewebsites.net/${lang}/api/content/hippocrates/home/`, {
                method: "GET"
            }).then((products) => {
                commit('SET_HOME', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return false
            })
        }
    },
    getters: {
        HOME (state) {
            return state.home
        },
    },
    modules: {
    }
}