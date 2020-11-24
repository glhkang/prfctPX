import React from "react";
import { Link } from "react-router-dom";
import Icon, { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { fetchLikes } from "../../util/like_api_util";
// import Likes from "../likes/likes;

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
    this.props.fetchLikes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.photoId !== this.props.match.params.photoId) {
      this.props.fetchPhoto(this.props.match.params.photoId);
      this.props.fetchLikes();
    }
  }

  photoBarLikes() {
    const {
      photo,
      session,
      like,
      deleteLike,
      createLike,
      currentUser,
    } = this.props;

    //get the length of all likes on photo
    let allLikes = like.filter((el) => el.photo_id === photo.id).length;
    let totalLikes;
    if (allLikes === 0 || allLikes === undefined) {
      totalLikes = 0;
    } else {
      totalLikes = allLikes;
    }

    //get all of the current user's likes
    let userLikes = like.map((el) => el.user_id);
    let liked = false;

    if (userLikes.includes(session)) {
      liked = true;
    }

    let photoLikeIds = [];
    for (let i = 0; i < like.length; i++) {
      if (like && photo.id === like[i].photo_id) {
        photoLikeIds.push(like[i].id);
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
          </Link>
          {totalLikes === 1 ? totalLikes + " like" : totalLikes + " likes"}{" "}
        </div>
      );
    } else {
      let heart = liked ? (
        <HeartTwoTone
          className="heart-button"
          twoToneColor="red"
          style={{ fontSize: "25px" }}
          onClick={() => {
            deleteLike(photoLikeIds.slice(-1)[0]);
            this.setState({ liked: false });
            liked = false;
            fetchLikes();
          }}
        />
      ) : (
        <HeartOutlined
          className="heart-button"
          style={{ fontSize: "25px" }}
          onClick={() => {
            createLike(session, photo.id);
            this.setState({ liked: true });
            liked = true;
            fetchLikes();
          }}
        />
      );
      return (
        <div className="photo-bar">
          <span
            className="heart-photo-bar"
            style={{
              cursor: "auto",
            }}
          >
            {heart}
            {totalLikes === 1 ? totalLikes + " like" : totalLikes + " likes"}
          </span>
        </div>
      );
    }
  }

  render() {
    const { photo, like, currentUser } = this.props;

    if (!photo) return null;

    const photoArray = Array.isArray(photo.photoUrl)
      ? photo.photoUrl
      : [photo.photoUrl];

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

    const thePhoto = photoArray.map((url, i) => {
      return <img src={url} key={i} className="photo-show-image" />;
    });

    return (
      <div className="photo-show-parent-container">
        <div className="photo-show-image-container">{thePhoto}</div>
        <div className="photo-show-info-bar">
          <div className="photo-info-bar">
            <div className="photo-bar-likes">{this.photoBarLikes()}</div>
            {/* <Likes
              photoId={photo.id}
              userId={photo.photographer_id}
              currentUserId={currentUser.id}
            /> */}
            <h2>{photo.title}</h2>
            <h3>by {photo.username ? photo.username : photo.email}</h3>
            <p>{photo.location}</p>
            <p>
              <b>Uploaded:</b> {date.toString().substring(0, 15)}
            </p>
            <p>{photo.description}</p>
            <p>
              <b>Category:</b> {photoCategory}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoShow;
