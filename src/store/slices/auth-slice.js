import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isUserLogin: false
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action) => {
            state.user = action.payload;
            state.isUserLogin = true;
        },
        logout: (state) => {
            state.user = null;
            state.isUserLogin = false;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

