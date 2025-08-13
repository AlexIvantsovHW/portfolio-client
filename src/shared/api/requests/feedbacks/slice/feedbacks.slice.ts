import { Tfeedbacks } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
  data: Tfeedbacks[];
}
const initialState: MyState = {
  data: [],
};

export const feedbacksSlice = createSlice({
  name: "feedbacksSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Tfeedbacks[]>) => {
      state.data = action.payload;
    },
  },
});
export const { setData } = feedbacksSlice.actions;
export default feedbacksSlice.reducer;
