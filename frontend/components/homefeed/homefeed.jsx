import React from "react";
import AllPhotos from "../photos/all_photos";

class Homefeed extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    const { photos, session } = this.props;
    if (!photos) return null;

    const allPhotos = photos.map((photo) => {
      return <AllPhotos photo={photo} currentUser={session} key={photo.id} />;
    });

    // //console.log("this is the homefeed index", photos);

    return (
      <div className="homefeed-container">
        <ul className="homefeed">{allPhotos}</ul>
      </div>
    );
  }
}

export default Homefeed;
