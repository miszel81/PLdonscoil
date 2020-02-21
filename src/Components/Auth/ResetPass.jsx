import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { resetPass } from "../../services/authServices";
import Recaptcha from "react-google-invisible-recaptcha";
import { Helmet } from "react-helmet";

class ResetPass extends Form {
  state = {
    data: {
      email: ""
    },
    messageSent: false,
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email")
  };

  sendMessage = () => {
    this.recaptcha.execute();
  };

  onResolved = () => {
    this.setState({ messageSent: true });
  };

  async doSubmit() {
    try {
      this.sendMessage();
      const { data } = this.state;
      const response = await resetPass(data.email);
      // console.log(response.data);
      if (response.data === "Success") {
        window.location = "/postreset";
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  }

  render() {
    return (
      <div className="container full-page-resetpass">
        <Helmet>
          <title>Reset password</title>
        </Helmet>
        <div className="jumbotron">
          <h1 className="header-form">Enter your email:</h1>{" "}
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  {this.renderInput(
                    "email",
                    "Email",
                    "email",
                    "Email address:"
                  )}
                  {this.renderButton("Reset Password")}

                  <Recaptcha
                    ref={ref => (this.recaptcha = ref)}
                    sitekey="6Lc8Tb0UAAAAACuBkK6fGJVgDG61-PiQTOo_wWki"
                    onResolved={this.onResolved}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ResetPass;
