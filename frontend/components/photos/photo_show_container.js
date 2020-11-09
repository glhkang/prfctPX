import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_actions";
import PhotoShow from "./photo_show";
import { fetchLikes, createLike, deleteLike } from "../../actions/like_actions";

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    photo: state.entities.photos[ownProps.match.params.photoId],
    session: state.session.id,
    like: Object.values(state.entities.like),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: (userId, photoId) => dispatch(createLike(userId, photoId)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),
  };
};

export default connect(mSTP, mDTP)(PhotoShow);
