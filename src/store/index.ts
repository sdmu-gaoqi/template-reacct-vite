import type { PreloadedState } from '@reduxjs/toolkit'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { testSlice, userSlice } from './features'

const reducers = combineReducers({
  test: testSlice.reducer,
  user: userSlice.reducer
})

export const setupStore = (preloadedState?: PreloadedState<AppState>) => {
  return configureStore({
    reducer: reducers,
    preloadedState
  })
}

const store = setupStore()

export type AppState = ReturnType<typeof reducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default store
