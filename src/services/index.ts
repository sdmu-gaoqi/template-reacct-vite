/**
 * @file 定义全局服务管理,一般用于接口管理
 */
import type { LoginParams } from './types'
import request from 'umi-request'
import cookie from 'js-cookie'

export const fetchPigeon = () => {
  return request('/v1/login', {})
}

export const loginService = async (params: LoginParams) => {
  const data = await request('/v1/login', params)
  return data
}

export const userProfileService = () => {
  return request('/v1/user/getprofile', { nid: cookie.get('nid'), token: cookie.get('token') })
}
