import { configureStore } from '@reduxjs/toolkit'
import {videoSlice} from "./movieReducer.ts";

export default configureStore({
    reducer: {
        video: videoSlice.reducer,
    }
})