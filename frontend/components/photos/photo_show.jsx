import React from "react";
import { Link } from "react-router-dom";
import EditPhotoFormContainer from "./edit_photo_form_container";

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
    // this.props.fetchLikes()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.photoId !== this.props.match.params.photoId) {
      this.props.fetchPhoto(this.props.match.params.photoId);
    }
  }

  addRemove() {
    // const {like, photo, deleteLike, createLike, session } = this.props
    const { photo, session } = this.props;
    // let liked = false
    // let photoLikeId = []

    // for(let i = 0; i < like.length; i++) {
    //   if (like && photo.id === like[i].photo_id) {
    //     photoLikeId.push(like[i].id)
    //     liked = true
    //   }
    // }

    if (photo.photographer_id === session) {
      return (
        <div className="photo-show-navbar">
          <Link to="/upload">upload icon here?</Link>
          <Link
            to={`/photos/edit`}
            // to={`/photos/${photo.id}/edit`}
            // component={EditPhotoFormContainer}
          >
            {/* <Link to={`/photos/${photo.id}/edit`}> */}
            <img src={window.moreIcon} className="more-icon" />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="photo-show-navbar">
          {/* {
            liked ?
              <button className='heart-button' 
              onClick={() => deleteLike(photoLikeId[0])}>
                {<i className="fas fa-heart fa-2x"></i>}
              </button> :
              <button className='heart-button' 
              onClick={() => createLike(session, photo.id)}>
                {<i className="far fa-heart fa-2x"></i>}
              </button>
          } */}
        </div>
      );
    }
  }

  render() {
    const { photo } = this.props;
    if (!photo) return null;
    // const {
    //   id,
    //   title,
    //   description,
    //   category,
    //   location,
    //   photographer_id,
    // } = this.state;

    const photoArray = Array.isArray(photo.photoUrl)
      ? photo.photoUrl
      : [photo.photoUrl];

    console.log("this is photo show", this.props.session, photo);

    const thePhoto = photoArray.map((url, i) => {
      return <img src={url} key={i} className="photo-show-img" />;
    });

    return (
      <>
        <div className="photo-show-parent-container">
          <div className="photo-show-index">
            <div className="photo-show-image-container">
              <div className="photo-show-photo-control">{thePhoto}</div>
            </div>
            <div className="photo-show-info-parent">
              <div className="photo-show-info">
                {this.addRemove()}

                <h5>{photo.title}</h5>
                <h6>by {photo.user}</h6>
                <p>Taken: {photo.created_at}</p>
                <p>{photo.body}</p>
              </div>
              <div className="photo-comments">
                {/* THIS WILL BE A COMMENT CONTAINER */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PhotoShow;
