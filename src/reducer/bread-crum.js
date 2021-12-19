import * as types from '../constants/actionTypes';

const init = {
    title: ""
}

export default (state = init , action) => {
    switch (action.type) {
        case types.BREADCRUMB:
            return {
                title: action.payload.title,
            };
        default:
            return state
    }
}

export const getBreadCrumbDetails = (state) => state.breadCrum;