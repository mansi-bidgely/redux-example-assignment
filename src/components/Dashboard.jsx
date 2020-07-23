import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post.jsx";
import Navbar from "./Navbar";
import { setLoginSuccess } from "../redux/reducer";

class Dashboard extends Component {
  componentDidUpdate = () => {
    this.props.history.push("/login");
  };
  render() {
    let { isLoginPending, isLoginSuccess, LoginError } = this.props;
    return (
      <React.Fragment>
        <Navbar login={isLoginSuccess} />
        <Post />
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

export default connect(mapStateToProps)(Dashboard);
