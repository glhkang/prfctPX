import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  // const clickDropdown = () => {
  //   return document.getElementById("navDropdown").classList.toggle("show");
  // };

  window.onclick = function (e) {
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

  const realNav = currentUser ? (
    <>
      <div className='user-dropdown-nav'>
        {/* <img
          src={window.userHeaderIconURL}
          onClick={() => clickDropdown()}
          className="header-user-dropbtn header-user-icon"
        /> */}
        <div id='navDropdown' className='user-dropdown-nav-content'>
          <Link to={`/users/${currentUser.id}`} className="dropdown-link">
            Profile
          </Link>
          {/* <Link
            to={`/users/${currentUser.id}/my_information`}
            className="dropdown-link"
          > */}
            {/* Settings
          </Link> */}
          <br />
          <a className="dropdown-link" onClick={logout}>
            Log out
          </a>
        </div>
      </div>
      {/* <Link to="/upload" className="header-upload-button">
        Upload
      </Link> */}
    </>
  ) : (
    <>
      <Link to="/login" className="header-login-button">
        Log In
      </Link>
      <Link to="/signup" className="header-signup-button">
        Sign Up
      </Link>
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
        <div className="top-nav-link-container">
          {/* <Link to="/discover" className="top-nav-link">
            Discover
          </Link> */}
        </div>
      </div>
      <div className='real-nav'>{realNav}</div>
    </div>
  );
};
