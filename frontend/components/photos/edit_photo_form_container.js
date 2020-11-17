import { connect } from "react-redux";
import {
  fetchPhoto,
  deletePhoto,
  updatePhoto,
} from "../../actions/photo_actions";
import EditPhotoForm from "./edit_photo_form";

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    errors: Object.values(state.errors.photos),
    photo: state.entities.photos[ownProps.match.params.photoId],
    session: state.session.id,
    formType: "Edit Photo",
  };
};

const mDTP = (dispatch) => {
  // debugger;
  return {
    action: (photo, id) => dispatch(updatePhoto(photo, id)),
    // action: (photo) => dispatch(updatePhoto(photo)),
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
  };
};

export default connect(mSTP, mDTP)(EditPhotoForm);
