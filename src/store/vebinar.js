import axios from "axios";

export default {
    state: {
        vebinar: [],
    },
    mutations: {
        SET_VEBINAR(state, payload) {
            state.vebinar = payload
        },
        
    },
    actions: {
        SET_VEBINAR ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_VEBINAR', payload)
        },
        GET_VEBINAR_FROM_API({commit}, payload) {
            if(payload.token !== "") {
                return axios('https://asprof-test.azurewebsites.net/api/webinars/?ordering=-start_date&page_size=6', {
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + payload.token
                    }
                }).then((products) => {
                    commit('SET_VEBINAR', products.data)
                    return products.data
                }).catch((error) => {
                    console.log(error)
                    return error
                })
            }
            return axios('https://asprof-test.azurewebsites.net/api/webinars/?ordering=-start_date&page_size=6', {
                method: "GET",
            }).then((products) => {
                commit('SET_VEBINAR', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        },
        GET_VEBINAR_FROM_API_PAGE({commit}, payload) {
            if(payload.token !== "") {
                return axios(`http://asprof-test.azurewebsites.net/api/webinars/?ordering=-start_date&page=${payload.content}&page_size=6`, {
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + payload.token
                    }
                }).then((products) => {
                    commit('SET_VEBINAR', products.data)
                    return products.data
                }).catch((error) => {
                    console.log(error)
                    return error
                })
            }
            return axios(`http://asprof-test.azurewebsites.net/api/webinars/?ordering=-start_date&page=${payload.content}&page_size=6`, {
                method: "GET",
            }).then((products) => {
                commit('SET_VEBINAR', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        VEBINAR (state) {
            return state.vebinar
        },
    },
    modules: {
    }
}