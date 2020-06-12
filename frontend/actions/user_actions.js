import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = data => ({
  type: RECEIVE_USER,
  data
});

export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId)
    .then(data => dispatch(receiveUser(data)))
);