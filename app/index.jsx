import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "assets/styles.css";
import store from "store";

import App from "components/App";

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById("app")
);
