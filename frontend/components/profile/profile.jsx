import React from "react";
import AllPhotos from "../photos/all_photos";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPhotos();
  }

  render() {
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
            {this.props.user.username}
            <div>follow button hurr</div>
            <div>100000k followers</div>
          </div>
        </div>

        <div className="profile-user-photos">{photos}</div>
      </div>
    );
  }
}

export default Profile;
