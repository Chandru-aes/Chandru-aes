import * as types from '../constants/actionTypes';

export const fetchPostsRequest = () => ({
    type: types.FETCH_POST_REQUEST
});

export const fetchPostsSuccess = (
    payload
) => ({
    type: types.FETCH_POST_SUCCESS,
    payload
});

export const fetchPostsFailure = (
    payload
) => ({
    type: types.FETCH_POST_FAILURE,
    payload
});
