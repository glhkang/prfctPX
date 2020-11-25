import { connect } from "react-redux";
import { fetchPhoto } from "../../actions/photo_actions";
import PhotoShow from "./photo_show";
import { fetchLikes } from "../../actions/like_actions";

const mSTP = (state, ownProps) => {
  return {
    photo: state.entities.photos[ownProps.match.params.photoId],
    session: state.session.id,
    like: Object.values(state.entities.like),
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    fetchLikes: () => dispatch(fetchLikes()),
  };
};

export default connect(mSTP, mDTP)(PhotoShow);
