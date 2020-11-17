import React from "react";
import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";

class UploadPhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.photo.id,
      title: this.props.photo.title,
      description: this.props.photo.description || "",
      category: this.props.photo.category,
      location: this.props.photo.location || "",
      photographer_id: this.props.photo.photographer_id,
      archived: this.props.photo.archived,
      photoFile: [],
      photoUrl: [],
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    // this.update = this.update.bind(this);
  }

  update(property) {
    return (e) => {
      this.setState({
        [property]: e.currentTarget.value,
      });
    };
  }

  handleFile(e) {
    e.preventDefault();
    const files = Array.from(e.currentTarget.files);
    let newFiles = [];

    files.forEach((file) => {
      const fileReader = new FileReader();

      if (file) {
        fileReader.readAsDataURL(file);
      } else {
        this.setState({
          photoUrl: [],
          photoFile: [],
          photographer_id: this.props.photo.photographer_id,
        });
      }

      fileReader.onloadend = () => {
        newFiles.push(fileReader.result);
        this.setState({
          photoUrl: newFiles,
          photoFile: files,
          photographer_id: this.props.photo.photographer_id,
        });
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    const {
      id,
      title,
      description,
      category,
      location,
      photographer_id,
      archived,
      photoFile,
    } = this.state;

    if (Boolean(title) && Boolean(photographer_id)) {
      const formData = new FormData();
      formData.append("photo[id]", id);
      formData.append("photo[title]", title);
      formData.append("photo[description]", description);
      formData.append("photo[category]", category);
      formData.append("photo[location]", location);
      formData.append("photo[photographer_id]", photographer_id);
      formData.append("photo[archived]", archived);

      //below is console logging the above pairs
      for (let pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      if (photoFile) {
        for (let i = 0; i < photoFile.length; i++) {
          formData.append("photo[photo][]", photoFile[i]);
        }
      }
      // debugger;
      console.log("this is the formData", Array.from(formData.entries()));
      this.props.action(formData, id).then(
        this.setState({
          id: id,
          // title: title,
          // description: description,
          // category: category,
          // location: location,
          // photographer_id: photographer_id,
          // archived: archived,
          // photoFile: [],
          // photoUrl: [],
          // redirect: true,
          // id: "",
          title: "",
          description: "",
          // category: "",
          // location: "",
          // photographer_id: "",
          // archived: "",
          photoFile: [],
          photoUrl: [],
          redirect: true,
        })
        // (data) => this.props.history.push(`/photos/${data.photo.id}`)
      );
    }
  }

  deleteButton() {
    const { photo } = this.props;
    return (
      <button
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation();
          this.props.deletePhoto(photo.id);
          this.setState({ redirect: true });
        }}
      >
        Delete photo
      </button>
    );
  }

  render() {
    // const { formType, photo, errors } = this.props;
    const { formType, photo, errors } = this.props;
    const { photoUrl } = this.state;

    console.log(this.state, "this is the", formType);

    let uploadButton = formType === "Edit Photo" ? "Save Changes" : "Upload";

    if (this.state.redirect) {
      return <Redirect to="/photos" />;
    }

    const upload = (
      <>
        <div className="upload-photo-title">
          <h3>Upload</h3>
        </div>
        <div className="upload-photo-container">
          <div className="upload-photo-form">
            <div className="upload-icon-container">
              <img
                src={window.uploadIcon}
                className="upload-
                  icon"
                height="40"
                width="40"
              />
            </div>

            <p>Upload a photo</p>
            <input
              type="file"
              name="photo-upload"
              id="photo-upload"
              accept="image/*"
              className="custom-file-input"
              title="  "
              style={{ color: "transparent" }}
              //^removes default 'choose a file text
              onChange={this.handleFile}
            />
          </div>
          <div className="upload-form-bottom-container">
            <div className="upload-form-bottom">
              <div className="form-bottom-text">
                <h4>Photo requirements</h4>
                <ul>
                  <li>.jpg only</li>
                  <li>Max. photo dimensions are 200MP/megapixels</li>
                </ul>
              </div>
              <div className="form-bottom-text">
                <h4>Licensing requirements</h4>
                <ul>
                  <li>Min. photo dimensions are 3MP/megapixels</li>
                  <li>No watermarks, logos, or borders</li>
                  <li>No NSFW content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );

    const uploadForm = (
      <>
        <div className="upload-photo-title">
          <h3>{formType === "Create Photo" ? "Upload" : "Photo Manager"}</h3>
          {/* <h3>{photo.photographer_id ? "Photo Manager" : "Create Photo"}</h3> */}
        </div>

        <div className="upload-form-container">
          <div className="upload-form-preview-container">
            <div className="upload-form-preview">
              <img
                src={formType === "Create Photo" ? photoUrl : photo.photoUrl}
              />
              {/* {photo.photoUrl} */}
              {/* {formPreview} */}
            </div>
          </div>

          <div className="upload-form-container">
            <div className="upload-form">
              {/* <form onSubmit={this.handleSubmit}> */}
              <form>
                <div>
                  <label>Photo Privacy</label>
                  <select
                    value={this.state.privacy}
                    onChange={this.update("privacy")}
                  >
                    <option value="1">Public</option>
                    <option value="2">Unlisted</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    value={this.state.title}
                    onChange={this.update("title")}
                    placeholder="e.g. Young man surfing in the ocean"
                  />
                </div>

                <div>
                  <label>Description</label>
                  <textarea
                    value={this.state.description}
                    onChange={this.update("description")}
                    placeholder="e.g. Low angle view of young man surfing in the ocean with a clear blue sky"
                  />
                </div>

                <div>
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    value={this.state.location}
                    onChange={this.update("location")}
                  />
                  {/* <small>
                {this.state.locationValid ? '' : 'This field is required.'}
              </small> */}
                </div>

                <div>
                  <label>Category</label>
                  <select
                    value={this.state.category}
                    onChange={this.update("category")}
                  >
                    <option value="1 Uncategorized">Uncategorized</option>
                    <option value="2">Abstract</option>
                    <option value="3">Aerial</option>
                    <option value="4">Animals</option>
                    <option value="5">Black and White</option>
                    <option value="6">Boudoir</option>
                    <option value="7">Celebrities</option>
                    <option value="8">City &amp; Architecture</option>
                    <option value="9">Commercial</option>
                    <option value="10">Concert</option>
                    <option value="11">Family</option>
                    <option value="12">Fashion</option>
                    <option value="13">Film</option>
                    <option value="14">Fine Art</option>
                    <option value="15">Food</option>
                    <option value="16">Journalism</option>
                    <option value="17">Landscape</option>
                    <option value="18">Macro</option>
                    <option value="19">Nature</option>
                    <option value="20">Night</option>
                    <option value="21">Nude</option>
                    <option value="22">People</option>
                    <option value="23">Performing Arts</option>
                    <option value="24">Sports</option>
                    <option value="25">Still Life</option>
                    <option value="26">Street</option>
                    <option value="27">Transportation</option>
                    <option value="28">Travel</option>
                    <option value="29">Underwater</option>
                    <option value="30">Urban Exploration</option>
                    <option value="31">Wedding</option>
                  </select>
                </div>

                {/* <button onClick={this.handleSubmit}>Upload</button> */}
                <div className="form-bottom">
                  <input
                    type="submit"
                    className="upload-button"
                    value={uploadButton}
                    onClick={this.handleSubmit}
                  />

                  {/* <button className="cancel-button">Cancel</button> */}
                  <br />
                  <Link className="cancel-link" to="/photos">
                    Cancel
                  </Link>
                </div>

                {formType === "Edit Photo" ? this.deleteButton() : null}
              </form>
            </div>
          </div>
        </div>
      </>
    );

    return (
      // <div>{photo.photo.length === 0 && !photoUrl ? uploadForm : upload}</div>

      // <div>{photoUrl.length > 0 ? uploadForm : upload}</div>

      <div>
        {(photoUrl.length > 0 && formType === "Create Photo") ||
        formType === "Edit Photo"
          ? uploadForm
          : upload}
      </div>
    );
  }
}

export default UploadPhotoForm;
