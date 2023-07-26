import { apiSlice } from "../api";
import { endPointsPaths } from "src/routes/paths";
import { ILoginResponse, ILoginBody } from "src/Types/Api/login";

export const loginSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponse, ILoginBody>({
            query: (body) => ({
                url: endPointsPaths.login,
                method: "POST",
                body,
            }),
            invalidatesTags: ["Login"],
        }),
    }),
});

export const { useLoginMutation } = loginSlice;
