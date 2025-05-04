import { Jobs } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
  data: Jobs[];
}
const initialState: MyState = {
  data: [],
};

export const jobsSlice = createSlice({
  name: "jobsSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Jobs[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = jobsSlice.actions;
export default jobsSlice.reducer;
