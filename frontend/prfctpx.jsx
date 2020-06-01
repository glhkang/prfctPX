import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
// import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const store = configureStore();
  //look below.. change it
  const store = {};
  ReactDOM.render(<h1>hello</h1>, root);
});