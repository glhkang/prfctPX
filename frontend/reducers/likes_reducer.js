import {
  REMOVE_LIKE,
  RECEIVE_LIKE,
  RECEIVE_ALL_LIKES,
} from "../actions/like_actions";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          user: action.user,
          photo_id: action.photo,
        },
      };
    case REMOVE_LIKE:
      delete nextState[action.likeId];
      return nextState;
    default:
      return state;
  }
};

export default likesReducer;
