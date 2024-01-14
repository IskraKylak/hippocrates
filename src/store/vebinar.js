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
        GET_VEBINAR_FROM_API({commit}, lang) {
            return axios(`https://asprof-test.azurewebsites.net/${lang}/api/webinars/?ordering=-start_date&page_size=6`, {
                method: "GET",
            }).then((products) => {
                commit('SET_VEBINAR', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return false
            })
        },
        GET_VEBINAR_SPECIAL_FROM_API({commit}, id) {
            return axios(`https://asprof-test.azurewebsites.net/api/webinars/?ordering=-start_date&page_size=6${id}`, {
                method: "GET"
            }).then((products) => {
                commit('SET_VEBINAR', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return false
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
                    return false
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
                    return false
                })
            }
            return []
        },
        GET_VEBINAR_FROM_API_PAGE({commit}, payload) {
            if(payload.oneSpec) {
                return axios(`https://asprof-test.azurewebsites.net/${payload.lang}/api/webinars/?ordering=-start_date&page_size=6&page=${payload.page}${payload.spec}`, {
                    method: "GET"
                }).then((products) => {
                    commit('SET_COURSES', products.data)
                    return products.data
                }).catch((error) => {
                    console.log(error)
                    return false
                })
            } else {
                return axios(`https://asprof-test.azurewebsites.net/${payload.lang}/api/webinars/?ordering=-start_date&page=${payload.page}&page_size=6${payload.spec}`, {
                    method: "GET"
                }).then((products) => {
                    commit('SET_COURSES', products.data)
                    return products.data
                }).catch((error) => {
                    console.log(error)
                    return false
                })
            }
        },
        GET_VEBINAR_FROM_API_PAGE_OLD({commit}, payload) {
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
                    return false
                })
            }
            return axios(`http://asprof-test.azurewebsites.net/api/webinars/?ordering=-start_date&page=${payload.content}&page_size=6`, {
                method: "GET",
            }).then((products) => {
                commit('SET_VEBINAR', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return false
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
                    return false
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
                    return false
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