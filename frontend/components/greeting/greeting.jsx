import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up Here 😊</Link>
    </nav>
  );

  const personalGreeting = () => (
    <nav className='header-group'>
      <h3 className='header-name'>What's up, {currentUser.username}</h3>
      <button className='header-button' onClick={logout}>Sign Off</button>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;