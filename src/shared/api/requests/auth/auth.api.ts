import { Tlogin, Tsignin } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLogin, setSignin } from "./slice";
import { baseQuery, baseQueryWithReauth } from "../../baseApi";

import { setSidebarOpen } from "@/widgets/sidebar/slice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    login: build.mutation<
      {
        response: { message: string[]; code: number };
      },
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
          dispatch(setSidebarOpen(true));
          //window.location.replace(import.meta.env.VITE_FRONTEND_URL as string);
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
export const { useLoginMutation, useSigninMutation /* useRefreshMutation */ } =
  authApi;
