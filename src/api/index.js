import axios from 'axios'
import store from "../store"
// import router from "../router"

const baseUrl = process.env.VUE_APP_BASE-URL;

export const apiAxios = axios.create({
    baseURL: ${baseUrl}/apiAxios,
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

apiAxios.interceptors.request.use(config => {
    console.log(store.state.auth.token)
    let token = store.state.auth.token
    if (token) {
        config.headers.common['Authorization'] = `Bearer ${token}`
    }
    return config
}, error => {
    return Promise.reject(error)
})