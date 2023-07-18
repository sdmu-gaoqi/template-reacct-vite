import { createSlice } from '@reduxjs/toolkit'

const testSlice = createSlice({
  name: 'test',
  initialState: {
    count: 0,
    userIno: {
      name: '张三',
      age: 18,
    },
  },
  reducers: {
    addCount: (state) => {
      state.count += 1
    },
    reduceCount: (state) => {
      state.count -= 1
    },
  },
})

export { testSlice }

export const { addCount, reduceCount } = testSlice.actions

export default testSlice.reducer
