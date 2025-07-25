import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice";
import { Universities } from "@/shared/types";
import { TeducationForm } from "@/widgets/update-education-widget/imports";
import { Tresponse } from "@/shared/types/response.type";

export const universitiesApi = createApi({
  reducerPath: "universitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["universities"],
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
    updateEducation: build.mutation<Tresponse<Universities[]>, Universities>({
      query: (body) => ({
        url: `api/university/${body.id}`,
        method: "PATCH",
        body,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setData(data.data));
        try {
          await queryFulfilled;
        } catch {}
      },
      invalidatesTags: ["universities"],
    }),
  }),
});
export const { useGetAllUniversitiesQuery, useUpdateEducationMutation } =
  universitiesApi;
