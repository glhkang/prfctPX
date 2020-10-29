import { connect } from "react-redux";
import Homefeed from "./homefeed";
import { fetchPhotos } from "../../actions/photo_actions";

const mSTP = (state) => {
  return {
    photos: Object.values(state.entities.photos),
    session: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
  };
};

export default connect(mSTP, mDTP)(Homefeed);
