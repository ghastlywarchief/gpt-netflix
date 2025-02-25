import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "appConfig",
    initialState: {
        lang: "en",
    },
    reducers: {
        changePageLanguage: (state, action) => {
            state.lang = action.payload;
        }
    },
})

export default configSlice.reducer;
export const {changePageLanguage} = configSlice.actions;