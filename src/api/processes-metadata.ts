import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const processesMetadataApi = createApi({
  reducerPath: "processesMetadata",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8080/api/v1/",
    headers: {
      Authorization: "secret token",
    },
  }),
  endpoints: (builder) => ({
    getAllProcessesMetadata: builder.query<any, void>({
      query: () => `process-metadata`,
    }),
  }),
});

export const { useGetAllProcessesMetadataQuery } = processesMetadataApi;
