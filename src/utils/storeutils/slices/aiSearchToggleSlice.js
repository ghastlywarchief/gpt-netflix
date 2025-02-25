import { createSlice } from "@reduxjs/toolkit";

const aiSearchToggleSlice = createSlice({
    name: "aiSearch",
    initialState: {
        aiSearchToggle: false,
    },
    reducers: {
        setAISearchToggle: (state) => {
            state.aiSearchToggle = !state.aiSearchToggle;
        }
    }
})

export default aiSearchToggleSlice.reducer;
export const {setAISearchToggle} = aiSearchToggleSlice.actions;