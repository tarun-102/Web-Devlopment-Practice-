import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";

const initialState = {
    show: false
}

const showFormSlice = createSlice({
    name: "showForm",
    initialState,

    reducers : {

        setShowForm : (state,action) => {
            state.show  = !state.show
        },
    }
})

export const{ setShowForm } = showFormSlice.actions

export default showFormSlice.reducer