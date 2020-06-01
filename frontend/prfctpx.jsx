import React from "./node_modules/react";
import ReactDOM from "./node_modules/react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
});