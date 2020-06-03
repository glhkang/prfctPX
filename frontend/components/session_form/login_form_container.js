import { connect } from "react-redux";


const mDTP = dispatch => {
  return {
    login: user => dispatch(login(usersReducer))
  }
};

export default connect(null, mDTP)(LoginForm);