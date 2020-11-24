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

    return (
      <div className="homefeed-container">
        <div className="homefeed-header">
          <h1>Home Feed</h1>
          <h4>
            See published photos from fellow photographers. Click on a photo for
            more information.
          </h4>
        </div>
        <div className="homefeed-photos">
          <ul className="homefeed">{allPhotos}</ul>
        </div>
      </div>
    );
  }
}

export default Homefeed;
