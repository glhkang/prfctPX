import { connect } from "react-redux";

import { fetchPhoto } from "../../actions/photo_actions";
import DisplayPhoto from "./display_photo";

const mSTP = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoId];

  if (!photo) return {};
  return {
    photographer: state.entities.users[photo.photographerId],
    photo,
    currentUserId: state.session.id,
  };
};

const mDTP = (dispatch) => ({
  fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
});

export default connect(mSTP, mDTP)(DisplayPhoto);
