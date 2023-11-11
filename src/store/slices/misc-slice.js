import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOperation: null,
  listRefreshToken: null,
  currentRecord: null,
};

const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setOperation: (state, action) => {
      state.currentOperation = action.payload;
    },
    refreshToken: (state) => {
      state.listRefreshToken = Math.random();
    },

    setRecord: (state, action) => {
      state.currentRecord = action.payload;
    },
  },
});

export const { setOperation, refreshToken, setRecord } = miscSlice.actions;
export default miscSlice.reducer;
