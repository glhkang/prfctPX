import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
//import user profile from user actions

const photosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  // let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos
    case RECEIVE_PHOTO:
      return Object.assign({}, state, action.photos)
    //user profile case
    default:
      return oldState;
  }
}

// NOT COMPLETED


export default photosReducer;