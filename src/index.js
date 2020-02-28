// import "core-js/stable";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
require("unorm");
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/Containers/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import Raven from "raven-js";

Raven.config("https://8c37081250524f85892c48886769901f@sentry.io/1476320", {
  release: "1-0-0",
  environment: "production"
}).install();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
