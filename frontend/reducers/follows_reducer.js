import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW,
} from "../actions/follow_actions";

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          user: action.user,
          follower: action.follower,
        },
      };
    case REMOVE_FOLLOW:
      delete nextState[action.followId];
      return nextState;
    default:
      return state;
  }
};

export default followsReducer;
