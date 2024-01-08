import axios from "axios";

export default {
    state: {
        specializations: [],
        specializationsItem: {}
    },
    mutations: {
        SET_SPECIALIZATIONS(state, payload) {
            state.specializations = payload
        },
        SET_SPECIALIZATIONSITEM(state, payload) {
            state.specializationsItem = payload
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
                return false
            })
        },
        GET_SPECIALIZATIONS_ITEM_FROM_API({commit}, id) {
            return axios(`https://asprof-test.azurewebsites.net/api/specializations/${id}`, {
                method: "GET"
            }).then((products) => {
                commit('SET_SPECIALIZATIONSITEM', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return false
            })
        }
    },
    getters: {
        SPECIALIZATIONS (state) {
            return state.specializations
        },
        SPECIALIZATIONSITEM (state) {
            return state.specializationsItem
        },
    },
    modules: {
    }
}