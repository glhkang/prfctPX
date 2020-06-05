import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR ERRORS'

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
};

export const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    (error) => dispatch(receiveSessionErrors(error.responseJSON)))
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)), 
    error => dispatch(receiveSessionErrors(error.responseJSON)))
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
    error => dispatch(receiveSessionErrors(error.responseJSON)))
};
