import request from '@/request/request'

export function verifyInfo (url, params) {
  console.log(params)
  return request(
    {
      url: '/users/userInfo',
      method: 'POST',
      data: params
    }
  )
}
