import * as PhotoAPIUtil from "../util/photo_api_util";

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAllPhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos,
});

const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo,
});

const removePhoto = (photoId) => ({
  type: REMOVE_PHOTO,
  photoId,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchPhotos = () => (dispatch) =>
  PhotoAPIUtil.fetchPhotos().then((data) => dispatch(receiveAllPhotos(data)));

export const fetchPhoto = (photoId) => (dispatch) =>
  PhotoAPIUtil.fetchPhoto(photoId).then((data) => dispatch(receivePhoto(data)));

export const createPhoto = (photo) => (dispatch) => {
  // debugger;
  return (
    PhotoAPIUtil.createPhoto(photo)
      .then((createPhoto) => {
        dispatch(receivePhoto(createPhoto));
        dispatch(clearErrors());
      })
      // .fail((err) => dispatch(console.log("you fucked up")));
      .fail((err) => dispatch(receiveErrors(err), console.log("you fucked up")))
  );
};

export const updatePhoto = (photo) => (dispatch) =>
  PhotoAPIUtil.updatePhoto(photo)
    .then((updatePhoto) => {
      dispatch(receivePhoto(updatePhoto));
      dispatch(clearErrors());
    })
    .fail((err) =>
      // dispatch(receiveErrors(err), console.log("you didn't update"))
      dispatch(console.log("you didn't update"))
    );

export const deletePhoto = (photoId) => (dispatch) =>
  PhotoAPIUtil.deletePhoto(photoId).then(() => dispatch(removePhoto(photoId)));
