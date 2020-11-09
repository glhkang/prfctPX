import * as ProfileAPIUtil from "../util/profile_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUser = (userId) => (dispatch) =>
  ProfileAPIUtil.fetchUser(userId).then((data) => dispatch(receiveUser(data)));
