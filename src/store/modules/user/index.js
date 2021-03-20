export default {
    namespaced: true,
    state: {
        users: [],
    },
    mutations: {
        setUser(state,data) {
            state.users = data
        },
    }
}