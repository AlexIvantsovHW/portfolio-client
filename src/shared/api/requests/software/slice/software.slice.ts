import { Tsoftwares } from "@/shared/types/software.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type TinitialState = {
  data: Tsoftwares[];
};
const initialState: TinitialState = { data: [] };

export const softwareSlice = createSlice({
  name: "softwareSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Tsoftwares[]>) => {
      state.data = action.payload;
    },
  },
});
export const { setData } = softwareSlice.actions;
export default softwareSlice.reducer;
