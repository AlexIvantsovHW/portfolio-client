import { Personals } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
  data: Personals[];
}
const initialState: MyState = {
  data: [],
};

export const personalSlice = createSlice({
  name: "personalSLice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Personals[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = personalSlice.actions;
export default personalSlice.reducer;
