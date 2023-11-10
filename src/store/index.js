import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth-slice";
import miscSlice from "./slices/misc-slice";

export default configureStore({
  reducer: {
    auth: authSlice,
    misc: miscSlice
  },
});
