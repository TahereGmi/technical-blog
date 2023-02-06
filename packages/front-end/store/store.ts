import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import vendorsReducer from './reducers/vendorsReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    vendors: vendorsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch