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
    UpdateFeedback: build.mutation<Tresponse<Tfeedbacks[]>, Tfeedbacks>({
      query: (body) => ({
        url: `/api/feedbacks/${body.id}`,
        method: "PATCH",
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
    DeleteFeedback: build.mutation<Tresponse<Tfeedbacks[]>, number>({
      query: (id) => ({
        url: `/api/feedbacks/${id}`,
        method: "DELETE",
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
export const {
  useGetAllFeedbacksQuery,
  useAddFeedbackMutation,
  useDeleteFeedbackMutation,
  useUpdateFeedbackMutation,
} = feedbacksApi;
