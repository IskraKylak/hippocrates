import axios from "axios";

export default {
    state: {
        vebinar: [],
        vebinarFavorite: [],
        vebinarNotFavorite: [],
    },
    mutations: {
        SET_VEBINAR(state, payload) {
            state.vebinar = payload
        },
        SET_VEBINAR_FAVORITE(state, payload) {
            state.vebinarFavorite = payload
        },
        SET_VEBINAR_NOT_FAVORITE(state, payload) {
            state.vebinarNotFavorite = payload
        },
    },
    actions: {
        SET_VEBINAR ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_VEBINAR', payload)
        },
        GET_VEBINAR_FROM_API({commit}, payload) {
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
        GET_VEBINAR_FROM_API_FAVORITE({commit}, payload) {
            if(payload.token) {
                return axios('https://asprof-test.azurewebsites.net/api/webinars/?ordering=-start_date&page_size=6&add_to_favourites=1', {
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + payload.token
                    }
                }).then((products) => {
                    commit('SET_VEBINAR_FAVORITE', products.data)
                    return products.data
                }).catch((error) => {
                    console.log(error)
                    return error
                })
            }
            return []
        },
        GET_VEBINAR_FROM_API_NOTFAVORITE({commit}, payload) {
            if(payload.token) {
                return axios('https://asprof-test.azurewebsites.net/api/webinars/?ordering=-start_date&page_size=6&add_to_favourites=0', {
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + payload.token
                    }
                }).then((products) => {
                    commit('SET_VEBINAR_NOT_FAVORITE', products.data)
                    return products.data
                }).catch((error) => {
                    console.log(error)
                    return error
                })
            }
            return []
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
        },
        GET_VEBINAR_FROM_API_PAGE_FAVORITE({commit}, payload) {
            if(payload.token !== "") {
                return axios(`http://asprof-test.azurewebsites.net/api/webinars/?ordering=-start_date&page=${payload.content}&page_size=6&add_to_favourites=1`, {
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
            return []
        },
        GET_VEBINAR_FROM_API_PAGE_NOT_FAVORITE({commit}, payload) {
            if(payload.token !== "") {
                return axios(`http://asprof-test.azurewebsites.net/api/webinars/?ordering=-start_date&page=${payload.content}&page_size=6&add_to_favourites=0`, {
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
            return []
        }
    },
    getters: {
        VEBINAR (state) {
            return state.vebinar
        },
        VEBINAR_FAVORITE (state) {
            return state.vebinarFavorite
        },
        VEBINAR_NOT_FAVORITE (state) {
            return state.vebinarNotFavorite
        },
    },
    modules: {
    }
}