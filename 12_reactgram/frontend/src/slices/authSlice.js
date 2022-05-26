import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = { user: user ? user : null, error: false, success: false, loading: false };

// Register an user and sign in
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
    const data = await authService.register(user);

    // Check for errors
    if(data.errors){
        return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.error = false;
            state.success = false;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.error = false;
            state.loading = true;
        }).addCase(register.fulfilled, (state, action) => {
            state.error = null;
            state.success = true;
            state.loading = false;
            state.user = action.payload;
        }).addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        });
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
