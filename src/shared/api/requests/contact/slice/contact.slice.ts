import { Contacts } from "@/shared/types/contact.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
  data: Contacts[];
}
const initialState: MyState = {
  data: [],
};
export const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Contacts[]>) => {
      state.data = action.payload;
    },
  },
});
export const { setData } = contactSlice.actions;
export default contactSlice.reducer;
