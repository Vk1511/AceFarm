import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading : false,
}

export const registerUser = createAsyncThunk('users/registerUser', async (data, thunkAPI) => {
    let dataUrl = `http://0.0.0.0:9000/auth/register/`;
    let response = await axios.post(dataUrl,data);
    return response.data;
});

let authSlice = createSlice({
    name : 'authSlice',
    initialState : initialState,
    extraReducers : (builder) => {
        builder.addCase(registerUser.pending , (state , action) => {
            state.loading = true;
        }).addCase(registerUser.fulfilled, (state , action) => {
            state.loading = false;
            // state.users = action.payload;
        }).addCase(registerUser.rejected, (state , action) => {
            state.loading = false;
            // state.errorMessage = `Oops! Something goes wrong!`
        })
    }
});
export default authSlice.reducer;