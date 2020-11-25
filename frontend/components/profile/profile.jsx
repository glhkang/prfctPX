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

    return (
      <div className="profile-container">
        <div className="profile-header-container">
          <div className="profile-header-info">
            <div className="profile-header-picture"></div>
            <h2>{user.username ? user.username : user.email}</h2>
            {/* <Follows followerId={session} /> */}
            <p>
              Hi! I'm a Software Engineer out of NYC. If you'd like to connect,
              please do so using the links above in the navigation bar or in the
              user dropdown. Hope to connect with you soon!
            </p>
          </div>
        </div>

        <div className="profile-user-photos">{photos}</div>
      </div>
    );
  }
}

export default Profile;
