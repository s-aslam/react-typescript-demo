import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./assets/scss/index.scss";
import reducer from "./store/reducers";
import { history } from "./config/routes";
import API from './services/interceptor';

const store = createStore(reducer);
API.setupInterceptors(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
