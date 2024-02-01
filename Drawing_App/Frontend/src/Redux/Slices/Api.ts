import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const drawingApi = createApi({
  reducerPath: 'drawingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    postDrawing: builder.mutation({
      query: (body) => ({
        url: '/drawings',
        method: 'POST',
        body,
      }),
    }),

    getDrawing: builder.query({
      query: (id: string|undefined) => ({
        url: `/drawings/${id}`,
        method: 'GET',
      }),
    }),

    updateDrawing: builder.mutation({
      query: ({ id, body }) => ({
        url: `/drawings/${id}`,
        method: 'PUT',
        body,
      }),
    }),

  }),
})

export const { usePostDrawingMutation,useGetDrawingQuery,useUpdateDrawingMutation } = drawingApi



