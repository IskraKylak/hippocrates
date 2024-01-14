import axios from "axios";

export default {
    state: {
        search: [],
    },
    mutations: {
        SET_SEARCH(state, payload) {
            state.search = payload
        },
        
    },
    actions: {
        SET_SEARCH({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_SEARCH', payload)
        },
        GET_SEARCH_FROM_API({commit}, obj) {
            return axios(`https://asprof-test.azurewebsites.net/${obj.lang}/api/courses/?name__icontains=${obj.search}`, {
                method: "GET"
            }).then((products) => {
                commit('SET_SEARCH', products.data)
                return products.data
            }).catch((error) => {
                console.log(error)
                return false
            })
        }
    },
    getters: {
        SEARCH (state) {
            return state.search
        },
    },
    modules: {
    }
}