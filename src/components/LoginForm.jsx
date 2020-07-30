import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import logo from "../assets/images/newputlogo.png";
import {
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
  initialValues() {
    return {
      email: "",
      password: "",
      errorMessage: ''


    }
  }

  validate(values) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let errors = {};

    if (values.email === "") {
      errors.email = "Email is missing";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is not in the expected email address standard format";
    }
    else{}
    if (values.password === "") {
      errors.password = "Password is missing";
    } else if (values.password.length < 6) {
      errors.password = "Password must be 6 characters at minimum";
    }
    else{}
    return errors;    
  }



  onSubmit (values) {
    sendLoginRequest(values.email, values.password)
      .then((success) => {
        localStorage.setItem("isLoginSuccess",true);
        this.props.setLoginPending(false);
        this.props.setLoginSuccess(true);
          this.props.history.push("/dashboard");
      })
      .catch((error) => {
        this.setState({errorMessage: error.message});
           

      });
  };


  render() {
    let { email, password ,isError} = this.state;
    let { isLoginPending, isLoginSuccess, LoginError } = this.props;
    let { setLoginPending, setLoginSuccess } = this.state;
    let { values,valid, errors } = this.state; 
    return ( 
    <div className="form">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="col-lg-12 borderBox">
          <img src={logo} alt="avator" className="avatar"/>
        <Formik
                initialValues={this.initialValues()}
                validate={this.validate.bind(this)}
                onSubmit={this.onSubmit.bind(this)} 
                > 
                {
                  props => (
                    <Form noValidate> 
                      <div className="form-group">
                      <Field
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          className={`form-control ${props.errors.email ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group ">
                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          className={`form-control ${props.errors.password ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                      </div>

                     <button  type="submit" className="btn btn-primary btn-block">
                        Log in
                  </button>
                  { this.state.errorMessage &&
  <h3 className="error"> { this.state.errorMessage } </h3> }

                      
                     
                    </Form>
                  )
                }
              </Formik>
         </div>
      </div>
    </div>
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
const mapDispatchToProps = (dispatch) => {
  return {
    setLoginPending: (isLoginPending) =>
      dispatch(setLoginPending(isLoginPending)),
    setLoginSuccess: (isLoginSuccess) =>
      dispatch(setLoginSuccess(isLoginSuccess)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
