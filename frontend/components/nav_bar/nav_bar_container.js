import React from 'react';
import { connect } from 'react-redux';
import { logout } from './top_nav';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';


const mSTP = state => ({
  currentUser: state.entities.user[state.session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(conenct(mSTP, mDTP)(NavBar));