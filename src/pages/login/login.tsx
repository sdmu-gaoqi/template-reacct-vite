import { useEffect, useRef } from 'react'
import { useUser } from '@/hooks/store'
import { ReactComponent as Sort } from '@/assets/defaultsort.svg'

const Login = () => {
  const { data, action } = useUser()
  const accountRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (data.nid) {
      action.profile()
    }
  }, [data.nid, action])

  return (
    <div>
      <div>
        <Sort />
        <ul>
          当前登录账号: {data?.userInfo?.email}
          <br />
          <input
            placeholder="请输入账户"
            ref={accountRef}
            defaultValue="1224362143@qq.com"
          />
          <br />
          <input placeholder="请输入密码" ref={passwordRef} type="password" />
          <button
            onClick={() => {
              const accountValue = accountRef?.current?.value
              const passwordValue = passwordRef?.current?.value
              if (accountValue && passwordValue) {
                action.login({
                  account: accountValue,
                  password: passwordValue
                })
              }
            }}
          >
            登录
          </button>
        </ul>
      </div>
    </div>
  )
}
export default Login
