import { Tlogin, Tsignin } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLogin, setSignin } from "./slice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    login: build.mutation<
      { access_token: string; response: { message: string[]; code: number } },
      Tlogin
    >({
      query(auth) {
        return {
          url: `/api/auth`,
          method: "POST",
          body: auth,
        };
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("access_token", data.access_token);
          dispatch(setLogin({ access_token: data.access_token }));
          window.location.replace(import.meta.env.VITE_FRONTEND_URL as string);
        } catch (err) {
          console.log(err);
        }
      },
    }),
    signin: build.mutation<{ message: string }, Tsignin>({
      query(data) {
        return {
          url: `/api/auth/signin`,
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
