import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default Store;