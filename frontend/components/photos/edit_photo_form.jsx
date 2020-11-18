import React from "react";
import UploadPhotoForm from "./upload_photo_form";

class EditPhotoForm extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  render() {
    const { action, formType, photo, session, deletePhoto, id } = this.props;

    if (!photo || photo.photographer_id !== session) return null;

    return (
      <div>
        <UploadPhotoForm
          action={action}
          formType={formType}
          photo={photo}
          id={id}
          deletePhoto={deletePhoto}
          session={session}
        />
      </div>
    );
  }
}

export default EditPhotoForm;
