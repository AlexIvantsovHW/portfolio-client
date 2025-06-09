import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice";
import { Universities } from "@/shared/types";

export const universitiesApi = createApi({
  reducerPath: "universitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    getAllUniversities: build.query<Universities[], number>({
      query: (limit: number) => `api/university`,
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
export const { useGetAllUniversitiesQuery } = universitiesApi;
