import { connect } from "react-redux";
import UploadPhotoForm from "./upload_photo_form";
import { createPhoto } from "../../actions/photo_actions";

const mSTP = ({ errors, session }) => {
  // debugger;
  return {
    errors: Object.values(errors.photos),
    // photo: state.photo,
    photo: {
      id: "",
      title: "",
      description: "",
      category: 1,
      location: "",
      photographer_id: session.id,
      archived: false,
      photo: [],
    },
    formType: "Create Photo",
  };
};
// const mSTP = (state, ownProps) => {
//   // debugger;
//   return {
//     errors: Object.values(state.errors.photos),
//     photo: {
//       id: "",
//       title: "",
//       description: "",
//       category: 1,
//       location: "",
//       photographer_id: state.session.id,
//       archived: false,
//       photo: [],
//     },
//     formType: "Create Photo",
//   };
// };

const mDTP = (dispatch) => ({
  action: (photo) => dispatch(createPhoto(photo)),
});

export default connect(mSTP, mDTP)(UploadPhotoForm);
