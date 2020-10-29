import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import PhotoErrorsReducer from "./photos_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  photos: PhotoErrorsReducer,
});

export default errorsReducer;
