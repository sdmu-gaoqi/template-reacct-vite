export type LoginParams = {
  account: string
  password: string
}

interface Login {
  token: string
  refresh_token: string
  nid: number
  isnew: 0 | 1
  isguest: 0 | 1
  accounttype: number
  expired_in: number
}

export type ReturnType<T = Record<string, never>> = T & { ret: number; time: number }

export type ReturnLogin = ReturnType<Login>
