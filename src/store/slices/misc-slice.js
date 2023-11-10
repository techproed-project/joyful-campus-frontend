import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    currentOperation: null,
    listRefreshToken: null
}

const miscSlice = createSlice({
    name: "misc",
    initialState,
    reducers: {
        setOperation: (state, action)=>{
            state.currentOperation = action.payload;
        },
        refreshToken: (state)=>{
            state.listRefreshToken = Math.random();
        }
    }
})

export const { setOperation, refreshToken } = miscSlice.actions;
export default miscSlice.reducer;