import { connect } from "react-redux";
import PhotoIndex from "./photo_index";
import { fetchPhotos } from "../../actions/photo_actions";

const mSTP = (state) => {
  return {
    photos: Object.values(state.entities.photos),
    // like: state.entities.like,
    session: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
  };
};

export default connect(mSTP, mDTP)(PhotoIndex);
