import $ from "jquery";

export const fetchPhotos = () =>
  $.ajax({
    url: `/api/photos`,
    method: "GET",
  });

export const fetchPhoto = (photoId) =>
  $.ajax({
    url: `/api/photos/${photoId}`,
    method: "GET",
  });

export const createPhoto = (photo) =>
  $.ajax({
    url: `/api/photos`,
    method: "POST",
    data: photo,
    contentType: false,
    processData: false,
  });

// export const updatePhoto = (photo) =>
//   $.ajax({
//     url: `/api/photos/${photo.id}`,
//     method: "PATCH",
//     data: photo,
//     contentType: false,
//     processData: false,
//   });

export const updatePhoto = (photo, id) => {
  // debugger;
  return $.ajax({
    url: `/api/photos/${id}`,
    method: "PATCH",
    data: photo,
    contentType: false,
    processData: false,
  });
};

export const deletePhoto = (photoId) =>
  $.ajax({
    url: `/api/photos/${photoId}`,
    method: "DELETE",
  });
