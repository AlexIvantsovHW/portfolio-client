import { Personals } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice";

export const personalApi = createApi({
  reducerPath: "personalApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    getPersonalData: build.query<Personals[], number>({
      query: (limit: number) => "api/personal",
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setData(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const { useGetPersonalDataQuery } = personalApi;
