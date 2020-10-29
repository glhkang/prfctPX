const { RECEIVE_ERRORS, CLEAR_ERRORS } = require("../actions/photo_actions");

const PhotoErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default PhotoErrorsReducer;
