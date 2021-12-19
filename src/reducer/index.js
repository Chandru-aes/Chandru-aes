import { combineReducers } from "redux";
import postReducer from "./postReducer";
import breadCrumbReducer from "./bread-crum"


// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    posts: postReducer,
    breadCrum: breadCrumbReducer
});

export default rootReducer;