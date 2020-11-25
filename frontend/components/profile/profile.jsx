import React from "react";
import AllPhotos from "../photos/all_photos";
import Follows from "../follows/follows";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPhotos();
    this.props.fetchFollows();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render() {
    const { session, user, follow } = this.props;
    const photos = this.props.photos.map((photo) => {
      if (photo.photographer_id === this.props.session) {
        return <AllPhotos key={photo.id} photo={photo} />;
      }
    });

    console.log("user", user, "session", session, "follow", follow);

    return (
      <div className="profile-container">
        <div className="profile-header-container">
          <div className="profile-header-info">
            <div className="profile-header-picture"></div>
            {user.username ? user.username : user.email}
            {/* <Follows followerId={session} /> */}
          </div>
        </div>

        <div className="profile-user-photos">{photos}</div>
      </div>
    );
  }
}

export default Profile;
