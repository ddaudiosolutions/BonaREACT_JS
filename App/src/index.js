import React from "react";
import ReactDOM from "react-dom";

import "./assets/sass/style.scss";
import App from "./App";
import store from "./app/store.js";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
