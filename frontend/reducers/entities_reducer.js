import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import sessionReducer from "./session_reducer";
import photosReducer from "./photos_reducer";
import profileReducer from "./profile_reducer";
import likesReducer from "./likes_reducer";
import followsReducer from "./follows_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
  photos: photosReducer,
  user: profileReducer,
  like: likesReducer,
  follow: followsReducer,
});

export default entitiesReducer;
