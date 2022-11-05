import axios from "axios";

export default {
    state: {
        coursesItem: [],
    },
    mutations: {
        SET_COURSESITEM(state, payload) {
            state.coursesItem = payload
        },
        
    },
    actions: {
        SET_COURSESITEM ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_COURSESITEM', payload)
        },
        GET_COURSESITEM_FROM_API({commit}, id) {
            return axios(`https://asprof-test.azurewebsites.net/api/courses/${id}`, {
                method: "GET"
            }).then((products) => {
                commit('SET_COURSESITEM', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        COURSESITEM (state) {
            return state.coursesItem
        },
    },
    modules: {
    }
}