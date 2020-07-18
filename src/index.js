import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";
import LoginForm from "./components/LoginForm.jsx";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Router>
      <Route path="/Dashboard" component={Dashboard}></Route>
      <Route exact={true} path="/" component={LoginForm}></Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
