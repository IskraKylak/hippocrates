import axios from "axios";

export default {
    state: {
        project: [],
    },
    mutations: {
        SET_PROJECT(state, payload) {
            state.project = payload
        },
        
    },
    actions: {
        SET_PROJECT({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_PROJECT', payload)
        },
        GET_PROJECT_FROM_API({commit}) {
            return axios('https://asprof-test.azurewebsites.net/api/content/hippocrates/project/', {
                method: "GET"
            }).then((products) => {
                commit('SET_PROJECT', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        PROJECT (state) {
            return state.project
        },
    },
    modules: {
    }
}