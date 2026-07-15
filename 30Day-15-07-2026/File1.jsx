import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./File.jsx";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;