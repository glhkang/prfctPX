import React from 'react';
import { connect } from 'react-redux';
import { logout } from './nav_bar';
import NavBar from './nav_bar';
import { withRouter } from 'react-router';


const mSTP = state => ({
  currentUser: state.entities.user[state.session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mSTP, mDTP)(NavBar));