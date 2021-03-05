export default {
    namespaced: true,
    state: {
      isAuthenticated: false,
      authUser: {},
    },
    getters: {
      //
    },
    mutations: {
     changeLoginStatus (state, data) {
       state.isAuthenticated = data.isAuthenticated
       state.authUser = data.authUser
     }
    },
  }