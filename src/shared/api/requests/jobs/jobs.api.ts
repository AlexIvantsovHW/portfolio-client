import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice/jobs.slice";
import { Jobs } from "@/shared/types";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  tagTypes: ["jobs"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),

  endpoints: (build) => ({
    getAllJobs: build.query<Jobs[], number>({
      query: (limit: number) => `api/jobs`,
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
    updateJob: build.mutation<{ message: string; data: Jobs[] }, Jobs>({
      query(data) {
        return {
          url: `api/jobs/${data.id}`,
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
      invalidatesTags: ["jobs"],
    }),
  }),
});

export const { useGetAllJobsQuery, useUpdateJobMutation } = jobsApi;
