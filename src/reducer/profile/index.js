import { getProfileSuccess, profileRequest } from "./actiontypes";

const init = {
    data: null,
    requesting: false
}

export default function profileReducer(state = init, action) {
    switch (action.type) {
        case profileRequest:
            return {...state, requesting: true}
        case getProfileSuccess:
            return {...state, data: action.payload.profile}
        default:
            return state
    }
}