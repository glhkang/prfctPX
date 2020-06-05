import React from 'react';
import { withRouter } from 'react-router';

class SplashPage extends React.Component {

  render() {
    return (
      <div className='main-splash'>
        <img src={window.splashImage} className='main-splash-image' />
      </div>
    )
  }
}

export default withRouter(SplashPage);