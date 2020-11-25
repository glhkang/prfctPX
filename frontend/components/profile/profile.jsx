import React from "react";
import { createFollow, deleteFollow } from "../../util/follow_api_util";
import AllPhotos from "../photos/all_photos";
import Follows from "../follows/follows";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPhotos();
  }

  render() {
    const { session, user, follow } = this.props;
    const photos = this.props.photos.map((photo) => {
      if (photo.photographer_id === this.props.session) {
        return <AllPhotos key={photo.id} photo={photo} />;
      }
    });

    // console.log(follow);
    // console.log("these are the follows", this.state.follows);

    // let followButton = "Follow";

    return (
      <div className="profile-container">
        <div className="profile-header-container">
          <div className="profile-header-info">
            <div className="profile-header-picture"></div>
            {user.username ? user.username : user.email}
            {/* <div>*follow button here*</div>
            <input
              type="button"
              className="follow-button"
              value={followButton}
              onClick={this.handleFollow}
            />
            <div>{follow.length} followers</div> */}
            {/* {this.currentProfile()} */}
          </div>
        </div>

        <div className="profile-user-photos">{photos}</div>
      </div>
    );
  }
}

export default Profile;
