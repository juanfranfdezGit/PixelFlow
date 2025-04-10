import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./photosSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
    reducer: {
        photos: photosReducer,
        search: searchReducer
    }
})