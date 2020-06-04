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
    const user = Object.assign({}, this.state);
    // this.props.processForm(user);
    this.props.action(user)
  };

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
        <form className='session-form-main' onSubmit={this.handleSubmit}>
          <h2>{formTitle}</h2>
          
          <div className='session-form-errors'>{this.renderErrors()}</div>

          <label className='session-form-input-label'>
            Email or Username
            <input
              type='text'
              className='session-form-input-field'
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>


          <label className='session-form-input-label'>Password
            <input
              type='password'
              className='session-form-input-field'
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>

          {/* demo user tbd*/}
          {/* <input 
            type='submit'
            className='session-input-button'
            value
          /> */}

          <input 
            type='submit'
            className='input-session-button'
            value={formType}
          />
        </form>
      </div>
    );
  }
}

export default LoginForm;