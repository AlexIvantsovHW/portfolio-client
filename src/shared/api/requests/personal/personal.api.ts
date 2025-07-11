import { Personal, Personals } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice";

export const personalApi = createApi({
  reducerPath: "personalApi",
  tagTypes: ["personal"],
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
    updatePersonalData: build.mutation<
      { message: string; data: Personals[] },
      Personals
    >({
      query(data) {
        return {
          url: `api/personal/${data.id}`,
          method: "PATCH",
          body: data,
        };
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setData(data?.data));
        } catch (err) {
          console.log(err);
        }
      },
      invalidatesTags: ["personal"],
    }),
  }),
});
export const { useGetPersonalDataQuery, useUpdatePersonalDataMutation } =
  personalApi;
