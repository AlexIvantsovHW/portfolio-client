import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice";
import { Tfeedbacks } from "@/shared/types";
import { Tresponse } from "@/shared/types/response.type";
import { Tfeedback } from "@/widgets/add-feedback-widget/imports";

export const feedbacksApi = createApi({
  reducerPath: "feedbacksApi",
  tagTypes: ["feedbacks"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    getAllFeedbacks: build.query<Tfeedbacks[], number>({
      query: (limit: number) => "api/feedbacks",
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setData(data));
        } catch (err) {}
      },
    }),
    AddFeedback: build.mutation<Tresponse<Tfeedbacks[]>, Tfeedback>({
      query: (body) => ({
        url: `/api/feedbacks`,
        method: "POST",
        body,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setData(data?.data));
        } catch (e) {
          console.log(e);
        }
      },
      invalidatesTags: ["feedbacks"],
    }),
  }),
});
export const { useGetAllFeedbacksQuery, useAddFeedbackMutation } = feedbacksApi;
