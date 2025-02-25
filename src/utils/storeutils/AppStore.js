import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice"
import configReducer from "./slices/configSlice"
import aiSearchReducer from "./slices/aiSearchToggleSlice"

const AppStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            appConfig: configReducer,
            aiSearch: aiSearchReducer,
        },
    }
);

export default AppStore;