import React from 'react';

class SignupForm extends React.Component {
  contructor(props) {
    super(props);
    this.state = {name: '', email: '', password:''}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  render() {
    return (
      <div className='signup-form'>
        <h3>Join prfctpx</h3>
        <p>Discover and share incredible photos, gain global exposure, and get paid for your work.</p>

        <form>
          <input 
            type='text'
            value={this.state.name}
            onChange={this.handleInput('name')} 
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