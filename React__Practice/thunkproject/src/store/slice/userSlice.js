import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../services/userService";

const initialState = {
    users: [],
    loading: false,
    error: null
}

export const fetchUsers = createAsyncThunk(
    "usserSlice/fetchUsers",
    async () => {
        const data = await getUser()
        return data;
    }
)

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},

    extraReducers: (builder) =>{
        builder

        .addCase(fetchUsers.pending, (state) => {
            state.loading =  true
        })
        .addCase(fetchUsers.fulfilled, (state,action) => {
            state.loading = false;
            state.users = action.payload
        })

        .addCase(fetchUsers.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message;
        })

    }
})

export default userSlice.reducer;