export default {
    namespaced: true,
    state: {
      isAuthenticated: false,
      authUser: {},
      token: localStorage.getItem('access_token') || ''
    },
    getters: {
      //
    },
    mutations: {
     changeLoginStatus (state, data) {
       state.isAuthenticated = data.isAuthenticated
       state.authUser = data.authUser
     },
     updateToken(state, token) {
       state.token = token
     }
    },
  }