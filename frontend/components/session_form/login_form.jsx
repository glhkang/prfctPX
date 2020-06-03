import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
  };

  render() {
    return (
      <div className='login-form'>
        <form>
          <input type='text'
            value={this.state.email}
            onChange={this.handleInput('email')} />

          <input type='password'
            value={this.state.password]}
            onChange={this.handleInput('password')} />

            <button onClick={this.handleSubmit}>Sign In</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;