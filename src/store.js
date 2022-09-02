import { configureStore } from "@reduxjs/toolkit";
import authReducer from './stores/authStore';

export default configureStore({
    reducer: {
        authReducer,
    }
})