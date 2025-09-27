import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { open: boolean } = {
  open: false,
};
export const sidebarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});
export const { setSidebarOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;
