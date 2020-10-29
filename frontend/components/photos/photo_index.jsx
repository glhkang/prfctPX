import React from "react";
import AllPhotos from "./all_photos";

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    const { photos, session, currentUser } = this.props;
    if (!this.props.photos) return null;

console.log("this is the session", session)
    const userPhotos = photos.map((photo) => {
      if (photo.photographer_id === session) {
        return <AllPhotos key={photo.id} photo={photo} currentUser={session}/>;
      }
    });

    for (let i = userPhotos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = userPhotos[i];
      userPhotos[i] = userPhotos[j];
      userPhotos[j] = temp;
    }


    console.log("this is photo index", this.state, photos, userPhotos);

    return (
      <div className="photo-index-photos-conatiner">
        <div className="photo-index-grid-container">
          <div className="photo-index-grid-inner">
            <ul className="photo-index-grid-container-photos">{userPhotos}</ul>
          </div>
        </div>
      </div>
    )
  }
}
export default PhotoIndex;
