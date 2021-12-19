import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux"
import configureStore from "./store";

export const store = configureStore();
import App from "./App"

reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("acpl-app")
)