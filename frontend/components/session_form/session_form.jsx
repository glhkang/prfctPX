import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestUserLogin = this.guestUserLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error.${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  guestUserLogin(e) {
    e.preventDefault();
    // const guestUser = { email: 'tester@gmail.com', password: 'testertest'};
    const guestUser = { email: "Gloria", password: "gloriaspassword" };
    this.props.action(guestUser);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  render() {
    const { formTitle, formType, errors } = this.props;

    const allErrors = (
      <div className="error-popup">
        <div>
          <ul>
            {errors.map((error, i) => (
              <li key={`error-${i}`}>{error}</li>
            ))}
          </ul>
        </div>
      </div>
    );

    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h3>{formTitle}</h3>

          <label className="session-form-label">
            Email or Username
            <br />
            <input
              type="text"
              className="session-form-field"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>

          <label className="session-form-label">
            Password
            <br />
            <input
              type="password"
              className="session-form-field"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </label>

          {/* <div className='session-form-errors'>{this.renderErrors()}</div> */}

          <input type="submit" className="input-button" value={formType} />
          <br />
          <div className="bottom-session-form">
            <span className="already-account">
              Don't have an account?{" "}
              <Link className="input-session-link" to="/signup">
                Sign Up Here!
              </Link>
            </span>
            <span className="already-account">
              Or, check us out as a{" "}
              <Link
                className="input-session-link"
                to="/"
                onClick={this.guestUserLogin}
              >
                Guest
              </Link>
            </span>
          </div>
        </form>
        {errors.length > 0 && allErrors}
      </div>
    );
  }
}

export default withRouter(LoginForm);
