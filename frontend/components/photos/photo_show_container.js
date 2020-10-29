import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_actions";
import PhotoShow from "./photo_show";
// import {
//   fetchLike,
//   fetchLikes,
//   createLike,
//   deleteLike,
// } from "../../actions/like_actions";

const mSTP = (state, ownProps) => {
  return {
    photo: state.entities.photos[ownProps.match.params.photoId],
    // like: Object.values(state.entities.like),
    session: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    // fetchLikes: () => dispatch(fetchLikes()),
    // createLike: (userId, photoId) => dispatch(createLike(userId, photoId)),
    // deleteLike: (likeId) => dispatch(deleteLike(likeId)),
  };
};

export default connect(mSTP, mDTP)(PhotoShow);
