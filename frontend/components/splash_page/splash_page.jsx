import React from 'react';
import { withRouter } from 'react-router';

class SplashPage extends React.Component {

  render() {
    return (
      <div className=''>
        <img src={window.splashImage} className='splash-image' />
      </div>
    )
  }
}

export default withRouter(SplashPage);