import axios from "axios";

export default {
    state: {
        acc: [],
    },
    mutations: {
        SET_ACC(state, payload) {
            state.acc = payload
        },
        
    },
    actions: {
        SET_ACC ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_ACC', payload)
        },
        GET_ACC_FROM_API({commit}, tokken) {
            return axios('https://asprof-test.azurewebsites.net/api/me/', {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + tokken
                }
            }).then((products) => {
                commit('SET_ACC', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        ACC (state) {
            return state.acc
        },
    },
    modules: {
    }
}