import { Feedbacks } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
  data: Feedbacks[];
}
const initialState: MyState = {
  data: [],
};

export const feedbacksSlice = createSlice({
  name: "feedbacksSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Feedbacks[]>) => {
      state.data = action.payload;
    },
  },
});
export const { setData } = feedbacksSlice.actions;
export default feedbacksSlice.reducer;
