import axios from "axios";

export default {
    state: {
        lesson: {},
    },
    mutations: {
        SET_LESSON(state, payload) {
            state.lesson = payload
        },
        
    },
    actions: {
        SET_LESSON ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_LESSON', payload)
        },
        GET_LESSON_FROM_API({commit}, obj) {
            return axios(`https://asprof-test.azurewebsites.net/api/courses/${obj.course}/lessons/${obj.lesson}/`, {
                method: "GET"
            }).then((products) => {
                commit('SET_LESSON', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        LESSON (state) {
            return state.contact
        },
    },
    modules: {
    }
}