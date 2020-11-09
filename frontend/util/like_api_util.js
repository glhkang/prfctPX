import $ from "jquery";

export const fetchLikes = () =>
  $.ajax({
    url: `/api/likes`,
  });

export const fetchLike = (likeId) =>
  $.ajax({
    url: `/api/photos/${likeId}`,
  });

export const createLike = (userId, photoId) => {
  return $.ajax({
    url: `/api/likes`,
    method: "POST",
    data: {
      user_id: userId,
      photo_id: photoId,
    },
  });
};

export const deleteLike = (likeId) =>
  $.ajax({
    url: `/api/likes/${likeId}`,
    method: "DELETE",
  });
