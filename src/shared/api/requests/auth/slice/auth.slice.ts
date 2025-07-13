import { Personals, Tauth, Tsignin } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
  login: Tauth;
  signin: { message: string };
}
const initialState: MyState = {
  login: { access_token: "" },
  signin: { message: "" },
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<Tauth>) => {
      state.login = action.payload;
    },
    setSignin: (state, action: PayloadAction<{ message: string }>) => {
      state.signin = action.payload;
    },
  },
});

export const { setLogin, setSignin } = authSlice.actions;
export default authSlice.reducer;
