import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

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
            <Link to="/signup">Sign up</Link>
          </div>
          <div className='splash-cover'></div>
        </div>
        <div className='splash-2'>
          <div className='splash-2-header'>
          {/* <h1>What Makes Me Different</h1> */}
          <h1>What makes us different</h1>
          </div>
          <div className='splash-2-body'>
            <div className='splash-2-col'>
              <img
                src={window.growIcon}
                className='splash-2-icon'
              /> 
              <h3>Grow as a photographer</h3>
              <p>Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.</p>
            </div>
            <div className='splash-2-col'>
              <img
                src={window.buildIcon}
                className='splash-2-icon'
              /> 
              <h3>Build your career</h3>
              <p>Present yourself as a professional. Get hired by displaying your services, create a Directory listing, showcase the workshops you're holding, and create Galleries to highlight your work.</p>
            </div>
            <div className='splash-2-col'>
              <img
                src={window.performIcon}
                className='splash-2-icon'
              /> 
              <h3>See how you're performing</h3>
              <p>With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.</p>
            </div>
          </div>
          <div className='splash-2-cover'></div>

        </div>

        <div className='bottom-splash'>
          <div className='bottom-splash-header'>
            <h3>Join our photography community today</h3>
          </div>
          <div className='bottom-splash-body'>
            <span>We want fresh, creative talent like you. Join our global network of like-minded creators to be inspired by incredible photos daily, and get rewarded for your talents.</span>
          </div>
          <div className='bottom-splash-signup'>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>

        <footer className='footer'>
          <div className='copyright-logo'> &copy; prfctpx </div>
          <div className="footer-links">
            <ul>
              <li className='footer-link'><a href='https://bit.ly/glorias-linkedin' target="_blank">LinkedIn</a></li>
              <li className='footer-link'><a href='https://bit.ly/glorias-github' target="_blank">GitHub</a></li>
              <li className='footer-link'><a href='https://bit.ly/glorias-portfolio' target='_blank'>Gloria Kang</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(SplashPageContainer);
