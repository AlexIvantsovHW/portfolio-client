import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice/projects.slice";
import { Projects } from "@/shared/types/projects.type";
import { Tresponse } from "@/shared/types/response.type";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["projects"],
  endpoints: (build) => ({
    getAllProjects: build.query<Projects[], number>({
      query: (limit: number) => "api/projects",
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(setData(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    updateProject: build.mutation<Tresponse<Projects>, Projects>({
      query: (body) => ({
        url: `/api/projects/${body.id}`,
        method: "PATCH",
        body,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
        } catch (e) {
          console.log(e);
        }
      },
      invalidatesTags: ["projects"],
    }),
  }),
});

export const { useGetAllProjectsQuery, useUpdateProjectMutation } = projectsApi;
