import axios from 'axios'

let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://192.168.17.41:3000/'
} else {
  baseUrl = 'http://182.92.162.178:3000'
}

const request = axios.create({
  baseURL: baseUrl
})

// request.defaults.headers.common.token = ''
export default request
