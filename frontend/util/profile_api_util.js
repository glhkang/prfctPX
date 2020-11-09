import $ from "jquery";

export const fetchUser = (userId) =>
  $.ajax({
    url: `/api/users/${userId}`,
    method: "GET",
  });
