import * as FollowAPIUtil from "../util/follow_api_util";

export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveAllFollows = (follows) => {
  return {
    type: RECEIVE_ALL_FOLLOWS,
    follows,
  };
};

const receiveFollow = (follow) => {
  return {
    type: RECEIVE_FOLLOW,
    id: follow.id,
    user: follow.user_id,
    follower: follow.follower_id,
  };
};

const removeFollow = (followId) => {
  return {
    type: REMOVE_FOLLOW,
    followId,
  };
};

export const fetchFollows = () => (dispatch) => {
  return FollowAPIUtil.fetchFollows().then((follows) => {
    dispatch(receiveAllFollows(follows));
  });
};

export const fetchFollow = (followId) => (dispatch) => {
  return FollowAPIUtil.fetchFollow(followId).then((follow) => {
    dispatch(receiveFollow(follow));
  });
};

export const createFollow = (userId, followerId) => (dispatch) => {
  return FollowAPIUtil.createFollow(userId, followerId).then((createFollow) => {
    dispatch(receiveFollow(createFollow));
  });
};

export const deleteFollow = (followId) => (dispatch) => {
  return FollowAPIUtil.deleteFollow(followId).then(() =>
    dispatch(removeFollow(followId))
  );
};
