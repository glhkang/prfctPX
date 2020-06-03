import React from 'react';

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