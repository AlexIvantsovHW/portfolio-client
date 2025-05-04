import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log(process.env.BASE_URL);
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: (build) => ({
    getData: build.query<any, number>({
      query: (limit: number) => `/products?limit=${limit}`,
    }),
  }),
});
export const { useGetDataQuery } = baseApi;
