import axios from 'axios'

const apiAxios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  'Content-Type': 'application/json',
})

apiAxios.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem('token')
  if (accessToken) {
    request.headers.token = localStorage.getItem('token')
  }
  return request
}, error => {
  return Promise.reject(error)
})


export default apiAxios