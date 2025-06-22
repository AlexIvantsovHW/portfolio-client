import { Tlogin, Tsignin } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLogin, setSignin } from "./slice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    login: build.mutation<
      { message: string; response: { access_token: string } },
      Tlogin
    >({
      query(auth) {
        return {
          url: `/api/login`,
          method: "POST",
          body: auth,
        };
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setLogin(data.response));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    signin: build.mutation<{ message: string }, Tsignin>({
      query(data) {
        return {
          url: `/api/signin`,
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setSignin(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const { useLoginMutation, useSigninMutation } = authApi;
