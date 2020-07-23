import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import logo from "./logo.svg";
import Dashboard from "./components/Dashboard.jsx";
import LoginForm from "./components/LoginForm.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const isAllowed = localStorage.getItem("isLoginSuccess");
  return (
    <div className="App">
      <Provider store={createStore(reducer)}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return isAllowed ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
            <Route exact path="/dashboard" component={Dashboard}></Route>

            <Route exact path="/login" component={LoginForm}></Route>
          </Switch>
        </Router>
      </Provider>
      ,
    </div>
  );
}

export default App;
