import { Projects } from "@/shared/types/projects.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
  data: Projects[];
}
const initialState: MyState = {
  data: [],
};
export const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Projects[]>) => {
      state.data = action.payload;
    },
  },
});
export const { setData } = projectsSlice.actions;
export default projectsSlice.reducer;
