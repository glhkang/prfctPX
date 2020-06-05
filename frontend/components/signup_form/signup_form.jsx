import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', email: '', password:'', signedUp: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestUserLogin = this.guestUserLogin.bind(this);
    this.signedUp = this.signedUp.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  } 

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  //change below when updating email/username log in
  guestUserLogin(e) {
    e.preventDefault()
    const guestUser = { email: 'testing', password: 'testing' };
    this.props.login(guestUser)
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

  signedUp(i) {
    this.setState({ actuallySignedUp: i })
  }

  render() {
    const { formTitle, formType } = this.props;
    
    const toSignUp = this.state.actuallySignedUp === 0 ? (
      <div className='signup-form'>
        <h3>{formTitle}</h3>
        <p>Discover and share incredible photos, gain global exposure, and get paid for your work.</p>

        <input 
          type='button'
          className='input-button'
          value='Continue with Email'
          onClick={() => this.signedUp(1)} 
        />

        <input
          type='button'
          className='input-button'
          value='Log in as a Guest!'
          onClick={() => this.guestUserLogin}
        />

        <p>
          Already have an account?
          <Link to='/login' className='input-session-link'>Log In</Link>
        </p>
      </div>
    ) : (
      <form className='signup-form' onSubmit={this.handleSubmit}>
        <div className='signup-form' onSubmit={this.handleSubmit}>
          {/* guest?? */}
      
          <br />
            <label className='session-form-input-label'>Email
              <br />
              <input 
                type='email'
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
          <br />
            <input
              type='submit'
              className='input-session-button'
              value='Try'
              value={formType}
            />
          <br />
            <div>
              Already have an account? <Link to='/login' className='input-session-link'>Log In</Link>
            </div>
            <p>Don't have an account? Log in as a <Link to='/' onClick={this.guestUserLogin}>Guest!</Link></p>
        </div>
      </form>
    )

    return (
      <div className='session-form-container'>{toSignUp}</div>
    )
  }
}

export default withRouter(SignupForm);
