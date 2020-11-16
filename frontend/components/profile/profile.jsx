import React from "react";
import { createFollow, deleteFollow } from "../../util/follow_api_util";
import AllPhotos from "../photos/all_photos";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPhotos();
    this.props.fetchFollows();
  }

  currentProfile() {
    const { follow, session, photo, user } = this.props;
    let followed = false;
    let followedId = [];

    for (let i = 0; i < follow.length; i++) {
      if (follow && user.id === follow[i].user_id) {
        followedId.push(follow[i].id);
        followed = true;
      }
    }

    if (user.id === session) {
      return (
        <div>
          {followedId.length === 1
            ? followedId.length + " follower"
            : followedId.length + " followers"}
        </div>
      );
    } else {
      return (
        <div>
          {followed ? (
            <button onClick={() => deleteFollow(followedId[0])}>
              Following or Unfollow
            </button>
          ) : (
            <button onClick={() => createFollow(session, user)}>Follow</button>
          )}
          {followedId.length === 1
            ? followedId.length + " follower"
            : followedId.length + " followers"}
          {/* following count here */}
        </div>
      );
    }
  }

  render() {
    const { session, user, follow } = this.props;
    const photos = this.props.photos.map((photo) => {
      if (photo.photographer_id === this.props.session) {
        return <AllPhotos key={photo.id} photo={photo} />;
      }
    });

    console.log(
      "this is the session",
      session,
      "this is the user",
      user,
      "this is the follows",
      follow
    );

    return (
      <div className="profile-container">
        <div className="profile-header-container">
          <div className="profile-header-info">
            <div className="profile-header-picture"></div>
            {user.username ? user.username : user.email}
            <div>*follow button here*</div>
            {/* <div>100000k followers</div> */}
            {this.currentProfile()}
          </div>
        </div>

        <div className="profile-user-photos">{photos}</div>
      </div>
    );
  }
}

export default Profile;
