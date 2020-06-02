import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import RootReducer from

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk));
};

export default configureStore;
