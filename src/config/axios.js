import axios from 'axios'

const backend = axios.create({
    baseURL: 'https://sbit3j-service.onrender.com',
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