import axios from "axios";

export default {
    state: {
        vebinarSingle: null,
    },
    mutations: {
        SET_VEBINARSINGLE(state, payload) {
            state.vebinarSingle = payload
        }
    },
    actions: {
        SET_VEBINARSINGLE ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_VEBINARSINGLE', payload)
        },
        GET_VEBINARSINGLE_FROM_API({commit}, payload) {
            return axios(`https://asprof-test.azurewebsites.net/api/webinars/${payload}`, {
                method: "GET"
            }).then((products) => {
                commit('SET_VEBINARSINGLE', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        VEBINARSINGLE (state) {
            return state.vebinarSingle
        },
    },
    modules: {
    }
}