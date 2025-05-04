import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice/jobs.slice";
import { Jobs } from "@/shared/types";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
  }),
  endpoints: (build) => ({
    getAllJobs: build.query<Jobs[], number>({
      query: (limit: number) => `/jobs`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setData(data));
        } catch (err) {
          // `onError` side-effect
          // dispatch(messageCreated("Error fetching post!"));
        }
      },
    }),
  }),
});
export const { useGetAllJobsQuery } = jobsApi;
