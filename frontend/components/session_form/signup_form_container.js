import React from 'react';
import { connect } from 'react-redux';

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user)),
});

export default connect(default, mDTP)(SignupForm);