import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".user-dropdown-button")) {
      let dropdown = document.getElementsByClassName("header-dropdown-nav");
      let i;
      for (i = 0; i < dropdown.length; i++) {
        let dropdowned = dropdown[i];
        if (dropdowned.classList.contains("show")) {
          dropdowned.classList.remove("show");
        }
      }
    }
  });

  const clicked = () => {
    return document.getElementById("navDropdown").classList.toggle("show");
  };

  const displayNav = currentUser ? (
    <>
      <div className="user-dropdown-nav">
        <img
          src={window.userIcon}
          onClick={() => clicked()}
          className="user-dropdown-header-icon"
        />
        <div id="navDropdown" className="user-dropdown-nav-content">
          <div className="dropdown-link-container">
            {/* <Link to={`/users/${currentUser}`} className="dropdown-link">
              Profile
            </Link> */}
            <Link to={`/users/${currentUser.id}`} className="dropdown-link">
              Profile
            </Link>
            <br />
            <a className="dropdown-link" onClick={logout}>
              Log out
            </a>
          </div>
        </div>

        <Link to="/upload" className="header-upload-button">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmns="http://www.w3.org/2000/svg"
            className="upload-arrow-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.66029 0.285116C8.29559 -0.0950387 7.70441 -0.0950387 7.33971 0.285116L0.302564 7.62259C0.0497699 7.86442 -0.0555065 8.23131 0.0283622 8.57817C0.112231 8.92503 0.371741 9.19603 0.70428 9.28399C1.03682 9.37196 1.38884 9.26275 1.62116 8.99953L7.06608 3.32224V15.0262C7.06608 15.564 7.48421 16 8 16C8.51579 16 8.93392 15.564 8.93392 15.0262V3.32224L14.3788 8.99953C14.6112 9.26275 14.9632 9.37196 15.2957 9.28399C15.6283 9.19603 15.8878 8.92503 15.9716 8.57817C16.0555 8.23131 15.9502 7.86442 15.6974 7.62259L8.66029 0.285116Z"
              fill="#222222"
            />
          </svg>{" "}
          Upload
        </Link>
        {/* &#8593; */}
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
    </>
  );

  return (
    <div className="nav-main">
      <div className="nav-logos">
        <div className="nav-logo-links">
          <div className="whitespace">
            <Link to="/" className="logo-link">
              p r f c t p x
            </Link>
            <div className="center-links">
              <a
                href="https://bit.ly/glorias-linkedin"
                className="center-link"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://bit.ly/glorias-github"
                className="center-link"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://bit.ly/glorias-portfolio"
                className="center-link"
                target="_blank"
              >
                Gloria Kang
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="display-nav">{displayNav}</div>
    </div>
  );
};
