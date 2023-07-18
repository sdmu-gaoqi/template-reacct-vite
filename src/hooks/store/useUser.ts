import type { AppState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import * as userReducer from '@/store/features/userSlice'
import { useMemo } from 'react'
import type { LoginParams } from '@/services/types'

const useUser = () => {
  const data = useSelector((state: AppState) => state.user)
  const dispatch = useDispatch()
  const action = useMemo(
    () => ({
      login: (params: LoginParams) => {
        return dispatch(userReducer.loginChunk(params))
      },
      profile: () => {
        return dispatch(userReducer.profileChunk())
      }
    }),
    [dispatch]
  )

  return {
    data,
    action
  }
}

export default useUser
