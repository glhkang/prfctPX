import { connect } from "react-redux";
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({errors}) => ({
  formType: 'Log in',
  formTitle: 'Log in to prfctpx',
  errors: errors.session,
});

const mDTP = dispatch => ({
    action: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(SessionForm);