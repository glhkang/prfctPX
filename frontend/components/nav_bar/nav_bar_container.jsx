import React from 'react';
import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { logout } from './nav_bar';
import { withRouter } from 'react-router';


const mSTP = state => {
  // debugger
  return ({
    currentUser: state.entities.users[state.session.id]
  })
}

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
});

// export default withRouter(connect(mSTP, mDTP)(NavBar));
export default connect(mSTP, mDTP)(NavBar);