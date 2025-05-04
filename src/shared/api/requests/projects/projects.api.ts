import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice/projects.slice";
import { Projects } from "@/shared/types/projects.type";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (build) => ({
    getAllProjects: build.query<Projects[], number>({
      query: (limit: number) => "api/projects",
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

export const { useGetAllProjectsQuery } = projectsApi;
