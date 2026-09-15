import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const showFormSlice = createSlice({
  name: "showForm",
  initialState,
  reducers: {
    setShowForm: (state) => {
      state.show = !state.show;
    },
  },
});

export const { setShowForm } = showFormSlice.actions;
export default showFormSlice.reducer;