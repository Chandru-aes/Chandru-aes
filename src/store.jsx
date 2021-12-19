import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducer';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";
import {breadCrumReducer} from "./reducer/bread-crum";
import profileReducer from "./reducer/profile";

// export default createStore(
//     combineReducers({
//         profile: profileReducer,
//         breadCrum: breadCrumReducer
//     }),
//     compose(applyMiddleware(thunk))
// )

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer,
            applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

export default configureStore;