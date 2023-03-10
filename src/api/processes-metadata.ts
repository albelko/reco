import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type ProcessMetadataCreate = {
  md: {
    id: string;
    name: string;
    description: string;
    iconUrl: string;
    anchors: {
      teams?: Array<string>;
      users?: Array<string>;
      relatedTerms?: Array<string>;
      domains?: Array<string>;
    };
  };
};

export const processesMetadataApi = createApi({
  reducerPath: 'processesMetadata',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8080/api/v1/',
    headers: {
      Authorization: 'secret token',
    },
  }),
  endpoints: (builder) => ({
    getAllProcessesMetadata: builder.query<any, void>({
      query: () => `process-metadata`,
    }),
    addProcessMetadata: builder.mutation<ProcessMetadataCreate, Partial<ProcessMetadataCreate>>({
      query: (body) => ({
        url: `process-metadata`,
        method: 'POST',
        body,
      }),
    }),
    deleteProcessMetadata: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `process-metadata/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const { useGetAllProcessesMetadataQuery, useAddProcessMetadataMutation, useDeleteProcessMetadataMutation } =
  processesMetadataApi;
