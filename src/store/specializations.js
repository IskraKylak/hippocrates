import axios from "axios";

export default {
    state: {
        specializations: [],
    },
    mutations: {
        SET_SPECIALIZATIONS(state, payload) {
            state.specializations = payload
        }, 
    },
    actions: {
        SET_SPECIALIZATIONS ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_SPECIALIZATIONS', payload)
        },
        GET_SPECIALIZATIONS_FROM_API({commit}) {
            return axios('https://asprof-test.azurewebsites.net/api/specializations/', {
                method: "GET"
            }).then((products) => {
                commit('SET_SPECIALIZATIONS', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        SPECIALIZATIONS (state) {
            return state.specializations
        },
    },
    modules: {
    }
}