export default {
    namespaced: true,
    state: {
        lists: [],
        checkClickAdd: true,
    },
    mutations: {
        setCheckClickAdd(state,data) {
            state.checkClickAdd = data
        },
        setLists(state,data) {
            state.lists = data
        },
    }
}