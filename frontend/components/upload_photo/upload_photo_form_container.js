import { connect } from 'react-redux';
import UploadPhotoForm from './upload_photo_form';

const mSTP = state => ({
  currentUserId: state.session.id
})

const mDTP = dispatch => ({
  createPhoto: formData => dispatch(createPhoto(formData))
})

export default connect(mSTP, mDTP)(UploadPhotoForm);

