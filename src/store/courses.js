import axios from "axios";

export default {
    state: {
        courses: [],
    },
    mutations: {
        SET_COURSES(state, payload) {
            state.courses = payload
        },
        
    },
    actions: {
        SET_COURSES ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_COURSES', payload)
        },
        GET_COURSES_FROM_API({commit}) {
            return axios('https://asprof-test.azurewebsites.net/api/courses/', {
                method: "GET"
            }).then((products) => {
                commit('SET_COURSES', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        },
        GET_COURSES_SPECIAL_FROM_API({commit}, id) {
            return axios(`https://asprof-test.azurewebsites.net/api/courses/?ordering=-start_date&page_size=6${id}`, {
                method: "GET"
            }).then((products) => {
                commit('SET_COURSES', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        },
        GET_COURSES_FROM_API_PAGE({commit}, payload) {
            return axios(`https://asprof-test.azurewebsites.net/${payload.lang}/api/courses/?ordering=-start_date&page_size=6&page=${payload.page}${payload.spec}`, {
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
    getters: {
        COURSES (state) {
            return state.courses
        },
    },
    modules: {
    }
}