import React from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestUserLogin = this.guestUserLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);

  };

 
  guestUserLogin(e) {
    e.preventDefault()
    const guestUser = { email: 'testing', password: 'testing'};
    this.props.action(guestUser)
  }

  renderErrors() {
    return (
      <ul className='session-errors'>
        {this.props.errors.map((error, idx) => (
          <li key={`error.${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { formTitle, formType } = this.props;
    
    return (
      <div className='session-form-container'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <h3>{formTitle}</h3>
          
          
          <label className='session-form-input-label'>
            Email or Username
            <br />
            <input
              type='text'
              className='session-form-input-field'
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>


          <label className='session-form-input-label'>Password
            <br />
            <input
              type='password'
              className='session-form-input-field'
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>

          <div className='session-form-errors'>{this.renderErrors()}</div>
          
          {/* guest user tbd*/}
          {/* <input 
            type='submit'
            className='input-session-button'
            value='Guest Access'
            onClick={this.guestUserLogin}
          /> */}

          <input 
            type='submit'
            className='input-session-button'
            value={formType}
          />
          <p>Don't have an account? Log in as a <Link to='/' onClick={this.guestUserLogin}>Guest!</Link></p>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);