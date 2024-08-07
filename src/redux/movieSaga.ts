import { put, takeLatest } from 'redux-saga/effects';
import {GET_MOVIE_VIDEO_KEY, getMovieVideoKey, IGetMovieVideoKeyAction} from './actions.ts';

function* setMovieTitleSaga(action: IGetMovieVideoKeyAction) {
    if (action.type === GET_MOVIE_VIDEO_KEY) {
        // Perform any complex logic here if necessary
        yield put(getMovieVideoKey(action.payload));
    }
}

export default function* watchMovieSaga() {
    yield takeLatest(GET_MOVIE_VIDEO_KEY, setMovieTitleSaga);
}