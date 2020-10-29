import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import sessionReducer from "./session_reducer";
import photosReducer from "./photos_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
  photos: photosReducer,
});

export default entitiesReducer;
