import React from "react";
import { Link, Route } from "react-router-dom";
import { currentUser } from "../nav_bar/nav_bar";

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
    this.props.fetchLikes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.photoId !== this.props.match.params.photoId) {
      this.props.fetchPhoto(this.props.match.params.photoId);
    }
  }

  photoBar() {
    const { photo, session, like, deleteLike, createLike } = this.props;
    // const { photo } = this.props;

    ////////edit

    let liked = false;
    let photoLikeId = [];

    for (let i = 0; i < like.length; i++) {
      if (like && photo.id === like[i].photo_id) {
        photoLikeId.push(like[i].id);
        liked = true;
      }
    }

    if (photo.photographer_id === session) {
      return (
        <div className="photo-bar">
          <Link to="/upload">
            <img src={window.uploadBarIcon} className="upload- bar-icon" />
          </Link>
          <Link to={`/photos/${photo.id}/edit`}>
            <img src={window.moreIcon} className="more-icon" />
          </Link>{" "}
          {photoLikeId.length === 1
            ? photoLikeId.length + " like"
            : photoLikeId.length + " likes"}{" "}
        </div>
      );
    } else {
      return (
        <div className="photo-bar">
          {liked ? (
            <button
              className="heart-button"
              onClick={() => deleteLike(photoLikeId[0])}
            >
              ❤️
            </button>
          ) : (
            <button
              className="heart-button"
              onClick={() => createLike(session, photo.id)}
            >
              🤍
            </button>
          )}{" "}
          {photoLikeId.length === 1
            ? photoLikeId.length + " like"
            : photoLikeId.length + " likes"}{" "}
        </div>
      );
    }
  }

  render() {
    const { currentUser, photo } = this.props;
    if (!photo) return null;

    const photoArray = Array.isArray(photo.photoUrl)
      ? photo.photoUrl
      : [photo.photoUrl];

    console.log("this is photo show", photo);
    console.log(
      "this is the photoArray",
      photoArray,
      // "this is the photoUrl",
      // photoUrl
      "this is the session",
      this.props.session,
      currentUser
    );
    console.log("these are the likes", this.props.like);

    const categories = [
      "Uncategorized",
      "Abstract",
      "Aerial",
      "Animals",
      "Black and White",
      "Boudoir",
      "Celebrities",
      "City & Architecture",
      "Commericial",
      "Concert",
      "Family",
      "Fashion",
      "Film",
      "Fine Art",
      "Food",
      "Journalism",
      "Landscape",
      "Macro",
      "Nature",
      "Night",
      "Nude",
      "People",
      "Performing Arts",
      "Sports",
      "Still Life",
      "Street",
      "Transportation",
      "Travel",
      "Underwater",
      "Urban Exploration",
      "Wedding",
    ];
    const photoCategory = categories.find(
      (category) => categories.indexOf(category) === photo.category - 1
    );

    const dateString = photo.created_at;
    let year = dateString.substring(0, 4);
    let month = dateString.substring(5, 7);
    let day = dateString.substring(8, 10);
    let hour = dateString.substring(12, 13);
    let minute = dateString.substring(15, 16);
    let date = new Date(year, month - 1, day, hour, minute);
    let currentDate = new Date();

    // console.log("this is created at", photo.created_at);
    const thePhoto = photoArray.map((url, i) => {
      return <img src={url} key={i} className="photo-show-image" />;
    });

    return (
      <div className="photo-show-parent-container">
        <div className="photo-show-image-container">{thePhoto}</div>
        <div className="photo-show-info-bar">
          <div className="photo-info-bar">
            {this.photoBar()}
            <h2>{photo.title}</h2>
            <h4>
              by{" "}
              {currentUser.username ? currentUser.username : currentUser.email}
            </h4>
            <p>{photo.location}</p>
            <p>Uploaded: {date.toString().substring(0, 15)}</p>
            <p>{photo.description}</p>
            <p>
              <b>Category:</b> {photoCategory}
            </p>
          </div>
          {/* <div className="photo-comments">
          TBD
        </div> */}
        </div>
      </div>
    );
  }
}

export default PhotoShow;
