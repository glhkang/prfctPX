import { RECEIVE_USER } from "../actions/profile_actions";

const ProfileReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return oldState;
  }
};

export default ProfileReducer;
