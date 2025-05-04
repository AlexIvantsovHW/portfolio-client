import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice";
import { Feedbacks } from "@/shared/types";

export const feedbacksApi = createApi({
  reducerPath: "feedbacksApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: (build) => ({
    getAllFeedbacks: build.query<Feedbacks[], number>({
      query: (limit: number) => "/feedbacks",
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setData(data));
        } catch (err) {}
      },
    }),
  }),
});
export const { useGetAllFeedbacksQuery } = feedbacksApi;
