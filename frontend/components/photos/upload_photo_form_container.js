import { connect } from "react-redux";
import UploadPhotoForm from "./upload_photo_form";
import { createPhoto } from "../../actions/photo_actions";

const mSTP = ({ errors, session }) => {
  return {
    errors: Object.values(errors.photos),
    photo: {
      title: "",
      description: "",
      category: 1,
      location: "",
      photographer_id: session.id,
      archived: false,
    },
    formType: "Create Photo",
  };
};

const mDTP = (dispatch) => ({
  action: (photo) => dispatch(createPhoto(photo)),
});

// const mDTP = (dispatch) => ({
//   createPhoto: (formData) => dispatch(createPhoto(formData)),
// });
// commented out code

export default connect(mSTP, mDTP)(UploadPhotoForm);
