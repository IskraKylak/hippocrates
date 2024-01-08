import axios from "axios";

export default {
    state: {
        contact: [],
    },
    mutations: {
        SET_CONTACT(state, payload) {
            state.contact = payload
        },
        
    },
    actions: {
        SET_CONTACT ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_CONTACT', payload)
        },
        GET_CONTACT_FROM_API({commit}) {
            return axios('https://asprof-test.azurewebsites.net/api/content/hippocrates/contacts/', {
                method: "GET"
            }).then((products) => {
                commit('SET_CONTACT', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return false
            })
        }
    },
    getters: {
        CONTACT (state) {
            return state.contact
        },
    },
    modules: {
    }
}