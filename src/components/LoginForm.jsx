import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard.jsx";
import Navbar from "./Navbar.jsx";
import logo from "../assets/images/newputlogo.png";
import {
  setLoginError,
  setLoginSuccess,
  setLoginPending,
} from "../redux/reducer";
import { sendLoginRequest } from "../Request/requestCall";
import "../assets/scss/login.scss";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.state;

    sendLoginRequest(email, password)
      .then((success) => {
        localStorage.setItem("isLoginSuccess", true);

        this.props.setLoginPending(false);
        this.props.setLoginSuccess(true);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {});
  };

  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, LoginError } = this.props;
    let { setLoginPending, setLoginSuccess } = this.state;
    return (
      <React.Fragment>
        <div classNameh="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <img src={logo} alt="Avatar" className="avatar" />
                  <form className="form-container" onSubmit={this.onSubmit}>
                    <div className="form-label-group">
                      <input
                        type="email"
                        name="email"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                      <label for="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        name="password"
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      ></input>
                      <label for="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                    </div>
                    <button
                      className="login"
                      type="submit"
                      value="login"
                      name="login"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
