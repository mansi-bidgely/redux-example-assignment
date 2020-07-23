import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  setLoginError,
  setLoginSuccess,
  setLoginPending,
} from "../redux/reducer";

class NavBar extends Component {
  constructor(props) {
    super();
  }

  handleLogout = () => {
    localStorage.removeItem("isLoginSuccess");
    this.props.setLoginSuccess(false);
  };

  render() {
    const serializedState = localStorage.getItem("isLoginSuccess");
    const isLoggedIn = serializedState;
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          {isLoggedIn && (
            <a className="navbar-brand flow" onClick={this.handleLogout}>
              logout
            </a>
          )}
        </nav>
      </React.Fragment>
    );
  }
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
