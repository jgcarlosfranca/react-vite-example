import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarWidth: "SIDEBAR_LARGE",
};

export const sidebarBehaviorSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        sidebarStateChanges: (state) => {
            state.sidebarWidth =
                state.sidebarWidth === "SIDEBAR_LARGE"
                    ? "SIDEBAR_SLIM"
                    : "SIDEBAR_LARGE";
        },
    },
});

export const { sidebarStateChanges } =
    sidebarBehaviorSlice.actions;

export default sidebarBehaviorSlice.reducer;
