import * as types from '../constants/actionTypes';

const initialState = {
    pending: false,
    posts: [],
    error: null
};

export default (state = initialState , action) => {
    switch (action.type) {
        case types.FETCH_POST_REQUEST:
            return {
                ...state,
                pending: true
            };
        case types.FETCH_POST_SUCCESS:
            return {
                ...state,
                pending: false,
                posts: action.payload.posts,
                error: null
            };
        case types.FETCH_POST_FAILURE:
            return {
                ...state,
                pending: false,
                posts: [],
                error: action.payload.error
            };
        default:
            return {
                ...state
            };
    }
};
