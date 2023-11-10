import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    currentOperation: null
}

const miscSlice = createSlice({
    name: "misc",
    initialState,
    reducers: {
        setOperation: (state, action)=>{
            state.currentOperation = action.payload;
        }
    }
})

export const { setOperation } = miscSlice.actions;
export default miscSlice.reducer;