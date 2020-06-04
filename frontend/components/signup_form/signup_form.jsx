import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', email: '', password:''}
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // this.props.action(this.state)
    this.props.signup(this.state);
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
    const { formTitle } = this.props;
    return (
      <div className='signup-form'>
        <h2>{formTitle}</h2>
        <p>Discover and share incredible photos, gain global exposure, and get paid for your work.</p>
       
        <div className='session-form-errors'>{this.renderErrors()}</div>

        <form className ='session-form'>
          <input 
            type='text'
            value={this.state.email}
            onChange={this.handleInput('email')} 
          />
          <input 
            type='password'
            value={this.state.password}
            onChange={this.handleInput('password')} 
          />

          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    )
  }

}

export default SignupForm;