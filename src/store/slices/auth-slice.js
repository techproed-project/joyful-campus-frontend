import { createSlice } from "@reduxjs/toolkit"
import { getMenuItems } from "../../helpers/user-menu";

const initialState = {
    user: null,
    isUserLogin: false,
    userMenu: []
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action) => {
            state.user = action.payload;
            state.isUserLogin = true;
            state.userMenu = getMenuItems(action.payload.role)
        },
        logout: (state) => {
            state.user = null;
            state.isUserLogin = false;
            state.userMenu = [];
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

