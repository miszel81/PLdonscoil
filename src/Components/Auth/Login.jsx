import React from "react";
import { Link, Redirect } from "react-router-dom";
// import { getUser } from "../../services/authServices";
import { login } from "../../services/userServices";
import Joi from "joi-browser";
import Form from "../Common/Form";
import "./Auth.css";
class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .max(35)
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .max(30)
      .label("Password")
  };

  doSubmit = async () => {
    // login and login errors handling.
    try {
      const { data } = this.state;
      const response = await login(data.email, data.password);
      console.log("response:", response);
      localStorage.setItem("session", response.headers["session"]);
      const { state } = this.props.location;
      // window.location = state ? state.from.pathname : "/Dashboard";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      } else if (ex.response && ex.response.status === 429) {
        const errors = { ...this.state.errors };
        window.location = "/blocked";
        this.setState({ errors });
      }
    }
  };

  render() {
    if (this.props.user) return <Redirect to="/" />;
    return (
      <div className="jumbotron jumbotron-about full-page">
        <div>
          <h1 className="h-text-fontMainTitle text-center mt-3 mb-5">
            Login form
          </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              {/* <div className="col-md-6 jumbotron loginPicture"></div> */}
              <div className="col-md-6 offset-md-3 col-sm-10 jumbotron jumbotron-login">
                {this.renderInput("email", "Email", "email", "Email address:")}
                {this.renderInput(
                  "password",
                  "Password",
                  "password",
                  "Password:"
                )}
                <div className="login-button mt-4 text-right">
                  {this.renderButton("Login")}
                </div>{" "}
              </div>{" "}
              <div className="cant-remember text-center">
                <p>
                  Can't remeber password?
                  <Link to="reset-password"> Reset</Link>
                </p>
              </div>
              <div className="not-registered text-center">
                {" "}
                <p>
                  Not registered? Create{" "}
                  <Link to="/register/school">School</Link> or{" "}
                  <Link to="/register/sponsor">Sponsor</Link> account.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
