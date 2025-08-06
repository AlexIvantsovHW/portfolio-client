import { Tresponse } from "@/shared/types/response.type";
import { Tsoftwares } from "@/shared/types/software.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice/software.slice";
import { Software } from "@/widgets/add-software-widget/model/schema";
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
    addSoftware: build.mutation<Tresponse<Tsoftwares[]>, Software>({
      query(data) {
        return {
          url: `api/software`,
          method: "POST",
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
      invalidatesTags: ["softwareApi"],
    }),
    deleteSoftware: build.mutation<Tresponse<Tsoftwares[]>, number>({
      query(id) {
        return {
          url: `api/software/${id}`,
          method: "DELETE",
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
      invalidatesTags: ["softwareApi"],
    }),
  }),
});

export const {
  useGetAllsoftwareQuery,
  useAddSoftwareMutation,
  useDeleteSoftwareMutation,
} = softwareApi;
