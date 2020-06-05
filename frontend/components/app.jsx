import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { withRouter } from 'react-router';
// import Welcome from '../components/nav_bar/welcome';
import NavBarContainer from '../components/nav_bar/nav_bar';
import SplashPage from './splash_page/splash_page';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/signup_form/signup_form_container';


const App = () => (
  <div>
    <header className='header-nav-bar'>
      <Route path='/' component={NavBarContainer} />
      {/* <h1>prfctpx</h1> */}
      {/* <Welcome /> */}
    </header>

    {/* <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} /> */}
    {/* comment below back in after getting login working */}
    <Switch>
      <AuthRoute exact path='/' component={SplashPage} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </Switch>
  </div>
);

export default withRouter(App);
