import $ from "jquery";

export const fetchFollows = () =>
  $.ajax({
    url: `/api/follows`,
  });

export const fetchFollow = (followId) =>
  $.ajax({
    url: `/api/users/${followId}`,
  });

export const createFollow = (userId, followerId) =>
  $.ajax({
    url: `/api/follows`,
    method: "POST",
    data: {
      user_id: userId,
      follower_id: followerId,
    },
  });

export const deleteFollow = (followId) =>
  $.ajax({
    url: `/api/follows/${followId}`,
    method: "DELETE",
  });
