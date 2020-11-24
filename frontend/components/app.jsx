import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { withRouter } from "react-router";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SplashPageContainer from "./splash_page/splash_page";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./signup_form/signup_form_container";
import UploadPhotoFormContainer from "./photos/upload_photo_form_container";
import EditPhotoFormContainer from "./photos/edit_photo_form_container";
import PhotoIndexContainer from "./photos/photo_index_container";
import HomefeedContainer from "./homefeed/homefeed_container";
import PhotoShowContainer from "./photos/photo_show_container";
import ProfileContainer from "./profile/profile_container";

const App = () => (
  <div>
    <header className="header-nav-bar">
      <Route path="/" component={NavBarContainer} />
    </header>

    <Switch>
      <ProtectedRoute
        exact
        path="/photos/:photoId/edit"
        component={EditPhotoFormContainer}
      />
      <ProtectedRoute
        exact
        path="/upload"
        component={UploadPhotoFormContainer}
      />
      <ProtectedRoute
        exact
        path="/users/:userId"
        component={ProfileContainer}
      />
      <Route path="/photos/:photoId" component={PhotoShowContainer} />
      <ProtectedRoute exact path="/home" component={HomefeedContainer} />
      <ProtectedRoute exact path="/photos" component={PhotoIndexContainer} />
      <AuthRoute exact path="/" component={SplashPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default withRouter(App);
