import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUser } from "../../actions/profile_actions";
import { fetchPhotos } from "../../actions/photo_actions";
import {
  fetchFollow,
  createFollow,
  deleteFollow,
  fetchFollows,
} from "../../actions/follow_actions";
// import { fetchLikes, createLike, deleteLike } from "../../actions/like_actions";

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    user: state.entities.users[ownProps.match.params.userId],
    // like: Object.values(state.entities.like),
    photos: Object.values(state.entities.photos),

    session: state.session.id,
    follow: Object.values(state.entities.follow),
  };
};

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchPhotos: () => dispatch(fetchPhotos()),

  fetchFollow: (followId) => dispatch(fetchFollow(followId)),
  createFollow: (userId, followerId) =>
    dispatch(createFollow(userId, followerId)),
  deleteFollow: (followId) => dispatch(deleteFollow(followId)),
  fetchFollows: () => dispatch(fetchFollows()),
  // fetchLikes: () => dispatch(fetchLikes()),
  // createLike: (userId, postId) => dispatch(createLike(userId, postId)),
  // deleteLike: (likeId) => dispatch(deleteLike(likeId)),
});

export default connect(mSTP, mDTP)(Profile);
