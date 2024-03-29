/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_BASEURL,
    prepareHeaders: (headers) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = sessionStorage.getItem("authToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("Access-Control-Allow-Headers", `*`);
      return headers;
    },
  }),
  endpoints: (_builder) => ({
    // Defina seus endpoints aqui
  }),
  tagTypes: [
    "Login",
    "GetUserDetail",
  ],
});
