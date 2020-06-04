import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../signup_form/signup_form_container';

class Welcome extends React.Component {
  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div>
          <h3>You're logged in!</h3>
        </div>
      )
    } else {
      return (
        <div>
          <LoginFormContainer />
          <SignupFormContainer />
        </div>
      )
    }
  }
}

export default Welcome;