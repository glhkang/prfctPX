<div className="photo-show-parent-container">
  <div className="photo-show-index">
    <div className="photo-show-image-container">{thePhoto}</div>
    <div className="photo-show-info-bar">
      <div className="photo-info-bar">
        {this.photoBar()}
        <h5>{photo.title}</h5>
        <p>{photo.description}</p>
        {/* <p>{likes.length}</p> */}
        <p>{photo.category}</p>
        <p>{photo.location}</p>
        <h6>by {photo.user}</h6>
        <p>Taken: {photo.created_at}</p>
      </div>
      {/* <div className="photo-comments">
          TBD
        </div> */}
    </div>
  </div>
</div>;
