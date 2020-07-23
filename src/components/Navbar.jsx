import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  setLoginError,
  setLoginSuccess,
  setLoginPending,
} from "../redux/reducer";
import "../assets/scss/navbar.scss";

class NavBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    const serializedState = localStorage.getItem("isLoginSuccess");
    const isLoggedIn = serializedState;
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          {isLoggedIn && (
            <span className="navbar-brand flow" onClick={this.handleLogout}>
              Logout
            </span>
          )}
        </nav>
      </React.Fragment>
    );
  }
  handleLogout = () => {
    localStorage.clear();
    this.props.setLoginSuccess(false);
  };
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    LoginError: state.LoginError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLoginPending: (isLoginPending) =>
      dispatch(setLoginPending(isLoginPending)),
    setLoginSuccess: (isLoginSuccess) =>
      dispatch(setLoginSuccess(isLoginSuccess)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
