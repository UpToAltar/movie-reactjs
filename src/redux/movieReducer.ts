// import {GET_MOVIE_VIDEO_KEY} from './actions.ts';
import { createSlice } from '@reduxjs/toolkit'
export interface VideoState {
    key: string;
}
const initialState: VideoState = {
    key: '',
};

export const videoSlice = createSlice({
    name: 'video',
    initialState: initialState,
    reducers: {
        videoReducer: (state : VideoState, action) => {
            return {
                ...state,
                key: action.payload,
            }
        },
    }
})
// Action creators are generated for each case reducer function
export const {videoReducer } = videoSlice.actions

export default videoSlice.reducer