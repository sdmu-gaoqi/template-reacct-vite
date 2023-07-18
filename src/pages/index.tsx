import styles from './style.module.scss'
import { useEffect, useRef } from 'react'
import { useUser } from '@/hooks/store'
import cookie from 'js-cookie'

const Home = () => {
  const { data, action } = useUser()
  const accountRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  console.log(data, 'data')

  useEffect(() => {
    const nid = cookie.get('nid')
    if (nid) {
      action.profile()
    }
  }, [action])

  useEffect(() => {
    if (data.nid) {
      action.profile()
    }
  }, [data.nid, action])

  return (
    <div>
      <div className={styles.news}>
        <ul className={styles.newsList}>
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
export default Home
