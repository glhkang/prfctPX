import React from 'react';
import { withRouter } from 'react-router';

class SplashPageContainer extends React.Component {

  render() {
    return (
      <div>
        <div className='main-splash'>
          <div className='main-splash-content'>
            <div>
              <h1>Discover and share the world's best photos</h1>
              <p>
                Get inspired with incredible photos from diverse styles and
                genres around the world. We're not guided by fads—just great
                photography.
              </p>
            </div>
            {/* <Link to="/signup">Sign up</Link> */}
          </div>
          <div className='splash-cover'></div>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashPageContainer);
