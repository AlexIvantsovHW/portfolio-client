import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { open: boolean } = {
  open: false,
};
export const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});
export const { setOpen } = navbarSlice.actions;
export default navbarSlice.reducer;
