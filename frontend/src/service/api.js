import axios from 'axios'
const ip = "172.16.1.159"
const apiPort = "5500"

const api = axios.create({
    baseURL: `http://${ip}:${apiPort}`
})

export default api