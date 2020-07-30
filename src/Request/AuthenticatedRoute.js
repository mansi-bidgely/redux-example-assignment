import React from "react"
import { Route, Redirect } from "react-router-dom"
const AuthenticatedRoute = ({ component: Component})=>(
    <Route
    render={(props)=>(localStorage.getItem("isLoginSuccess") ? <Component {...props}/>:<Redirect to="/login"
  />)}>
    </Route>
  );
export default AuthenticatedRoute