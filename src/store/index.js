import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../home/counter/counterSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
