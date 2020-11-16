import React from "react";
import { Link } from "react-router-dom";

const AllPhotos = (props) => {
  const { photo } = props;

  return (
    <li className="photo-index-photos">
      <Link to={`/photos/${photo.id}`}>
        <img className="photo-index-image" src={photo.photoUrl} />
      </Link>
    </li>
  );
};

export default AllPhotos;
