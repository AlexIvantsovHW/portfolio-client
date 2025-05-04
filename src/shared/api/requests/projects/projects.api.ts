import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice/projects.slice";
import { Projects } from "@/shared/types/projects.type";
console.log("BASE URL", process.env.BASE_URL);
export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
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
