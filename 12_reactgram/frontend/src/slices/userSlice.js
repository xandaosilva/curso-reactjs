import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = { user: {}, error: false, success: false, loading: false, message: null };

// Get user details
export const profile = createAsyncThunk("user/profile", async(user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await userService.profile(user, token);
    return data;
});

// Update user details
export const updateProfile = createAsyncThunk("user/update", async(user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await userService.updateProfile(user, token);

    // Check for errors
    if(data.erros){
        return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(profile.pending, (state) => {
            state.error = false;
            state.loading = true;
        }).addCase(profile.fulfilled, (state, action) => {
            state.error = null;
            state.success = true;
            state.loading = false;
            state.user = action.payload;
        }).addCase(updateProfile.pending, (state) => {
            state.error = false;
            state.loading = true;
        }).addCase(updateProfile.fulfilled, (state, action) => {
            state.error = null;
            state.success = true;
            state.loading = false;
            state.user = action.payload;
            state.message = "Usuário atualizado com sucesso.";
        }).addCase(updateProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        });
    }
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;
