import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import login from './modules/login'
import user from './modules/user'
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    modules: {
      home,
      login,
      user,
      auth
    },
    plugins: [createPersistedState()]
})

export default store