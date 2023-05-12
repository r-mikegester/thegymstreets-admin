import axios from 'axios'

const backend = axios.create({
    baseURL: 'http://54.254.154.47:3333
})

backend.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access_token')

    if (token && token.length > 0) {
        config.headers.Authorization = `Bearer ${token}`
    } else {
        localStorage.removeItem('access_token')
    }

    return config
})

export default backend