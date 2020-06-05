import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { withRouter } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar';
import SplashPage from './splash_page/splash_page';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';


const App = () => (
  <div>git 
    <header className='header-nav-bar'>
      <Route path='/' component={NavBarContainer} />
    </header>

    <Switch>
      <AuthRoute exact path='/' component={SplashPage} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </Switch>
  </div>
);

export default withRouter(App);
