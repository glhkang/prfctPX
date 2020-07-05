import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receiveAllPhotos = data => ({
  type: RECEIVE_ALL_PHOTOS,
  data
});

// export const receivePhoto = data => ({
//   type: RECEIVE_PHOTO, 
//   data
// });

export const fetchPhotos = () => dispatch => (
  PhotoAPIUtil.fetchPhotos()
    .then(data => dispatch(receiveAllPhotos(data)))
);

export const fetchPhoto = photoId => dispatch => (
  PhotoAPIUtil.fetchPhoto(photoId)
    .then(data => dispatch(receivePhoto(data)))
);

export const createPhoto = photoFormData => dispatch => (
  PhotoAPIUtil.createPhoto(photoFormData)
);

export const postPhoto = formData => dispatch => (
  PhotoAPIUtil.receivePhoto(formData)
    .then(data => dispatch(receivePhoto(data)))
);