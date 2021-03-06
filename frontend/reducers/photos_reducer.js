import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
} from "../actions/photo_actions";

const PhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      nextState[action.photo.id] = action.photo;
      return nextState;
    case REMOVE_PHOTO:
      nextState[action.photo.id] = action.photo;
      delete nextState[action.photoId];
      return nextState;
    default:
      return oldState;
  }
};

export default PhotosReducer;
