import React from 'react';
import { withRouter } from 'react-router';

class SplashPageContainer extends React.Component {

  render() {
    return (
      <div>
        <div className="main-splash">
          <div className="main-splash-content">
            <div>
              <h1>Discover and share the world's best photos</h1>
              <p>
                Get inspired with incredible photos from diverse styles and
                genres around the world. We're not guided by fads—just great
                photography.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashPageContainer);


    // return (
    //   <div className="main-all-content">
    //     <img src={window.splashImage} className="main-splash-image" />
    //     <div>
    //       <h1>Discover and share the world's best photos</h1>
    //       <p>
    //         Get inspired with incredible photos from diverse styles and genres
    //         around the world. We're not guided by fads—just great photography.
    //       </p>
    //     </div>
    //     <div className="main-splash"></div>
    //   </div>
    // );