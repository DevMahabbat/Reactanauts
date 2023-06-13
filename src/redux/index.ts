import { configureStore } from "@reduxjs/toolkit";
import blogslice from "./slices/blogslice";
import themeSlice from "./slices/themeSlice";
import placeslice from "./slices/placeslice";

export const store = configureStore({
   reducer :{
    blogslice: blogslice,
    themeSlice: themeSlice,
    placeslice:placeslice

   }
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;