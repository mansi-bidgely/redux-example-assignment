import React, { Component } from "react";

import { connect } from "react-redux";
import {
  login,
  setLoginError,
  setLoginSuccess,
  setLoginPending,
} from "../redux/reducer";
import { Redirect } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super();
  }
  render() {
    const isLoggedIn = this.props.login;

    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          {isLoggedIn && (
            <a className="navbar-brand" onClick={this.handleLogout}>
              logout
            </a>
          )}
        </nav>
      </React.Fragment>
    );
  }
  handleLogout = () => {
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
