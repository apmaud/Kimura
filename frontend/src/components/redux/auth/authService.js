import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5209/',
        prepareHeaders: (headers, { getState }) => {},
        }),
        endpoints: (builder) => ({
            getUserInfo: builder.query({
                query: () => ({
                    url: 'api/User/userinfo',
                    method: 'GET',
            }),
        }),
    }),
});

export const { useGetUserInfoQuery } = authApi;