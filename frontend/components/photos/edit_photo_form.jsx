import React from "react";
import { Redirect, withRouter } from "react-router";
import UploadPhotoForm from "./upload_photo_form";

class EditPhotoForm extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.match.params.id !== prevProps.match.params.id) {
  //     this.props.fetchPhoto(this.props.params.photoId);

  //   }
  // }

  render() {
    // const { action, formType, photo, session, deletephoto, cancelModal, closeModal } = this.props;
    const { action, formType, photo, session, deletePhoto } = this.props;

    console.log(
      "this is the formtype",
      formType,
      // "this is the user",
      // this.props.photo.photographer_id,
      "this is THE PHOTOTOTOTOTOT",
      photo
    );

    if (!photo || photo.photographer_id !== session) return null;

    return (
      <div>
        <UploadPhotoForm
          action={action}
          formType={formType}
          photo={photo}
          deletePhoto={deletePhoto}
          session={session}
        />
      </div>
    );
  }
}

export default EditPhotoForm;
