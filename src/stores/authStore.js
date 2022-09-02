import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated : false
    },
    reducers: {
        updateAuth: (state, newValue) => {
            state.isAuthenticated = newValue.payload;
        }
    }
});

export const {updateAuth} = authSlice.actions;
export default authSlice.reducer;