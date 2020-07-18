import React, { Component, componentDidUpdate } from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { setLoginSuccess } from "../redux/reducer";

class Dashboard extends Component {
  componentDidUpdate = () => {
    this.props.history.push("/");
  };
  render() {
    let { isLoginPending, isLoginSuccess, LoginError } = this.props;
    console.log(isLoginSuccess);
    return (
      <div>
        <Navbar login={isLoginSuccess} />
        Welcome
      </div>
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

export default connect(mapStateToProps)(Dashboard);
