export const GET_MOVIE_VIDEO_KEY = 'GET_MOVIE_VIDEO_KEY';

export interface IGetMovieVideoKeyAction {
    type: typeof GET_MOVIE_VIDEO_KEY;
    payload: string;
}
export type MovieActionTypes = IGetMovieVideoKeyAction;

export const getMovieVideoKey = (key : string) : IGetMovieVideoKeyAction => ({
    type: GET_MOVIE_VIDEO_KEY,
    payload: key,
});
