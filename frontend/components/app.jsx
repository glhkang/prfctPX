import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { withRouter } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashPageContainer from './splash_page/splash_page';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import UploadPhotoFormContainer from './upload_photo/upload_photo_form_container';
import DisplayPhotoContainer from './display_photo/display_photo_container'



const App = () => (
  <div>
   <header className='header-nav-bar'>
      <Route path='/' component={NavBarContainer} />
  </header>

      <Switch>
        <AuthRoute exact path='/' component={SplashPageContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <ProtectedRoute path='/upload' component={UploadPhotoFormContainer} />
        <Route path='/photos/:photoId' component={DisplayPhotoContainer} />

      </Switch>
  </div>
);


export default withRouter(App);