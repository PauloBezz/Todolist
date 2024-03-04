import axios from 'axios'
const ip = "192.168.0.104"
const apiPort = "5500"

const api = axios.create({
    baseURL: `http://${ip}:${apiPort}`
})

export default api