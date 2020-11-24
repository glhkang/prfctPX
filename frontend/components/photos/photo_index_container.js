import { connect } from "react-redux";
import { fetchPhotos } from "../../actions/photo_actions";
import PhotoIndex from "./photo_index";

const mSTP = (state) => {
  return {
    photos: Object.values(state.entities.photos),
    session: state.session.id,
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
  };
};

export default connect(mSTP, mDTP)(PhotoIndex);
