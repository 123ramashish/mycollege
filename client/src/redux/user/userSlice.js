import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        signupStart: (state) => {
            state.isLoading = true;
        },
        signupSuccess: (state) => {
            state.isLoading = false;
            state.error = null;
        },
        signupFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const { loginStart, loginSuccess, loginFailure, signupStart, signupSuccess, signupFailure } = userSlice.actions;
export default userSlice.reducer;
