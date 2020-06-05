import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  const clickDropdown = () => {
    return document.getElementById("navDropdown").classList.toggle("show");
  };

  window.onclick = function(e) {
    if (!e.target.matches('.user-dropdown-button')) {
      let dropdown = document.getElementsByClassName(
        'header-dropdown-nav'
      );

      let i;
      for (i = 0; i < dropdown.length; i++) {
        let dropdowned = dropdown[i];
        if (dropdowned.classList.contains("show")) {
          dropdowned.classList.remove("show");
        }
      }
    }
  };

  const nav = currentUser ? (
    <>
      <div className='user-dropdown-nav'>
        <img
          src={window.userIcon}
          onClick={() => clickDropdown()}
          className='user-dropdown-header-icon'
        />
        <div id='navDropdown' className='user-dropdown-nav-content'>
          <Link 
            to={`/users/${currentUser}`} className="dropdown-link">Profile
          </Link>
          <a className='dropdown-link' onClick={logout}>Log out</a>
          <br />
        </div>
      </div>
    </>
    
  ) : (
    <>
      <Link to="/login" className="header-login-button">
        Log In
      </Link>
      <Link to="/signup" className="header-signup-button">
        Sign Up
      </Link>
      {/* test logout below... */}
        {/* <button onClick={logout}>Log Out</button> */}
    </>
  );

  return (
    <div className='nav-main'>
      <div className='nav-logos'>
        <div className='nav-logo-links'>
          <Link to="/" className='logo-link'>
            prfctpx
          </Link>
        </div>
        <div className="nav-links">
          {/* <Link to="/" className="nav-link">
           Discover
          </Link> */}
          {/* <Link to="/" className="nav-link">
            Dummy Link
          </Link>
          <Link to="/" className="nav-link">
            Dummy Link          
          </Link> */}
        </div>

        <div className='right-nav'>{nav}</div>
      </div>
    </div>
  );
};
