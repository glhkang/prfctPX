export const fetchPhotos = () => (
  $.ajax({
    url: `api/photos`,
    method: 'GET'
  })
);

export const fetchPhoto = photoId => (
  $.ajax({
    url: `api/photos/${photoId}`,
    method: 'GET'
  })
);

export const createPhoto = formData => (
  $.ajax({
    url: `api/photos`,
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
);