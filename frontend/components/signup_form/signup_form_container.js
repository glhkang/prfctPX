import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
  return {
    formType: 'Sign up',
    formTitle: 'Join prfctpx',
    errors: errors.session,
  }
};

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
});

export default withRouter(connect(mSTP, mDTP)(SignupForm)); 