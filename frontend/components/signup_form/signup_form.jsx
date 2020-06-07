import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', email: '', password:'', showForm: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestUserLogin = this.guestUserLogin.bind(this);
    this.option = this.option.bind(this);
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

  guestUserLogin(e) {
    e.preventDefault()
    const guestUser = { email: 'tester@gmail.com', password: 'testertest' };
    this.props.login(guestUser)
  }

  renderErrors() {
    return (
      <ul className='signup-errors'>
        {this.props.errors.map((error, idx) => (
          <li key={`error.${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  option(i) {
    this.setState({ showForm: i })
  }

  render() {
    const { formTitle, formType } = this.props;
    
    const display =
      this.state.showForm === 0 ? (
        <div className='session-form'>
          <h2>{formTitle}</h2>
          <span className='session-signup-text'>
            Discover and share incredible photos, gain global exposure, and get
            paid for your work.
          </span>

          <br />
          <input
            type='button'
            className='input-button'
            value='Continue with Email'
            onClick={() => this.option(1)}
          />

          <br />
          <input
            type='button'
            className='input-button'
            value='Log in as a Guest!'
            onClick={this.guestUserLogin}
          />

          <br />
          <span className='already-account'>
            Already have an account?
            <Link to='/login' className='input-session-link'>
              {' '}
              Log In
            </Link>
          </span>
        </div>
      ) : (
        <form className='session-form-container' onSubmit={this.handleSubmit}>
          <div className='signup-form' onSubmit={this.handleSubmit}>
            <h3>Sign Up for prfctpx!</h3>
            <label className='session-form-label'>
              Email
              <br />
              <input
                type='email'
                className='session-form-field'
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
            </label>
            <label className='session-form-label'>
              Password
              <br />
              <input
                type='password'
                className='session-form-field'
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
            <div className='session-form-errors'>{this.renderErrors()}</div>
            <input type='submit' className='input-button' value={formType} />
            <br />
            <span className='already-account'>
              Already have an account?
              <Link 
                to='/login' 
                className='input-session-link'
              >
                {' '}
                Log In
              </Link>
            </span>
            <span className='already-account'>
              Don't have an account? Log in as a
              <Link
                to='/'
                className='input-session-link'
                onClick={this.guestUserLogin}
              >
                {' '}
                Guest!
              </Link>
            </span>
            <br />
          </div>
        </form>
      );

    return (
      <>
        <div className='extra-space'>
          <div className='session-form-container'>
            {display}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(SignupForm);
