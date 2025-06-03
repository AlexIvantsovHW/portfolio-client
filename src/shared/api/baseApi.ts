import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    getData: build.query<any, number>({
      query: (limit: number) => `products?limit=${limit}`,
    }),
  }),
});
export const { useGetDataQuery } = baseApi;
