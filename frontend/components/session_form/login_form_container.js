import { connect } from "react-redux";
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user))
  }
};

export default connect(null, mDTP)(LoginForm);