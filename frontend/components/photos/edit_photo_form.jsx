import React from "react";
import { Redirect, withRouter } from "react-router";
import UploadPhotoFormContainer from "./upload_photo_form_container";

class EditPhotoForm extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
    // this.props.fetchPhoto(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.match.params.id !== prevProps.match.params.id) {
      this.props.fetchPhoto(this.props.params.photoId);
      // this.props.fetchPhoto(this.props.params.id);
    }
  }

  render() {
    // const { action, formType, photo, session, deletephoto, cancelModal, closeModal } = this.props;
    const { action, formType, photo, session, deletePhoto } = this.props;
    // const {
    //   id,
    //   title,
    //   description,
    //   category,
    //   location,
    //   photographer_id,
    // } = this.state;

    console.log(
      "this is the formtype",
      formType
      // "this is the user",
      // this.props.photo.photographer_id
    );

    if (!photo || photo.photographer_id !== session) return null;

    return (
      <div>
        <UploadPhotoFormContainer
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

export default withRouter(EditPhotoForm);
