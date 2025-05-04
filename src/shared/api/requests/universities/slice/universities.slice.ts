import { Universities } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
  data: Universities[];
}
const initialState: MyState = {
  data: [],
};

export const universitiesSlice = createSlice({
  name: "universitiesSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Universities[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = universitiesSlice.actions;
export default universitiesSlice.reducer;
