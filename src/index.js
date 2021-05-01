import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Country API</title>
      <meta
        name="description"
        content="Country API is a searchable list of countries and information about those countries"
      />
      <link rel="canonical" href="https://ihesiulor-countries.netlify.app/" />
    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
