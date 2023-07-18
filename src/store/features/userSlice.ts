import { loginService, userProfileService } from '@/services'
import cookie from 'js-cookie'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loginChunk = createAsyncThunk('user/login', loginService)
export const profileChunk = createAsyncThunk('user/profile', userProfileService)

type UserState = {
  loading: boolean
  userInfo: Record<string, any>
  nid: string
}

const initialState: UserState = {
  loading: false,
  userInfo: {},
  nid: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const { addCase } = builder
    addCase(loginChunk.pending, (state) => {
      state.loading = true
    })
    addCase(loginChunk.fulfilled, (state, action: any) => {
      cookie.set('nid', String(action.payload.nid), { expires: 30 })
      cookie.set('token', String(action.payload.token), { expires: 30 })
      state.nid = action.payload.nid
      state.loading = false
    })
    addCase(loginChunk.rejected, (state) => {
      state.loading = false
    })
    addCase(profileChunk.pending, () => {})
    addCase(profileChunk.fulfilled, (state, action) => {
      state.userInfo = action.payload
    })
    addCase(profileChunk.rejected, () => {
      cookie.remove('nid')
      cookie.remove('token')
    })
  }
})

export { userSlice }

export default userSlice.reducer
