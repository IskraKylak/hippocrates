import axios from "axios";

export default {
    state: {
        event: [],
    },
    mutations: {
        SET_EVENT(state, payload) {
            state.event = payload
        },
        
    },
    actions: {
        SET_EVENT ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_EVENT', payload)
        },
        GET_EVENT_FROM_API({commit}) {
            return axios('https://asprof-test.azurewebsites.net/api/events/?ordering=-start_date&page_size=100', {
                method: "GET"
            }).then((products) => {
                commit('SET_EVENT', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        EVENT (state) {
            return state.event
        },
    },
    modules: {
    }
}