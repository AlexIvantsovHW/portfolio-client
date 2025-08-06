import { Tresponse } from "@/shared/types/response.type";
import { Tsoftwares } from "@/shared/types/software.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice/software.slice";
export const softwareApi = createApi({
  reducerPath: "softwareApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),

  tagTypes: ["softwareApi"],
  endpoints: (build) => ({
    getAllsoftware: build.query<Tresponse<Tsoftwares[]>, number>({
      query: (limit: number) => `api/software`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data.data);
          dispatch(setData(data.data));
        } catch (err) {}
      },
    }),
  }),
});

export const { useGetAllsoftwareQuery } = softwareApi;
