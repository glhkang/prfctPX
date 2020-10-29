// import React from "react";
// import { Redirect } from "react-router-dom";
// import { withRouter } from "react-router";

// class UploadPhotoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: this.props.photo.id || "",
//       title: this.props.photo.title,
//       description: this.props.photo.description || "",
//       category: this.props.photo.category,
//       location: this.props.photo.location || "",
//       photographer_id: this.props.photo.photographer_id,
//       archived: this.props.photo.archived,
//       photoFile: [],
//       photoUrl: [],
//       redirect: false,
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleFile = this.handleFile.bind(this);
//     this.updateState = this.updateState.bind(this);
//   }

//   updateState(type) {
//     return (e) => {
//       this.setState({
//         [type]: e.currentTarget.value,
//       });
//     };
//   }

//   // handleFile(e) {
//   //   const file = e.currentTarget.files[0];
//   //   const fileReader = new FileReader();
//   //   fileReader.onloadend = () => {
//   //     const image = new Image();
//   //     image.src = fileReader.result;

//   //     image.onload = () => {
//   //       this.setState({
//   //         photoFile: file,
//   //         photoUrl: fileReader.result,
//   //         photographerId: this.props.currentUserId,
//   //         // title: file.name,
//   //         title: e.value,
//   //       });
//   //     };
//   //   };
//   //   if (file) {
//   //     fileReader.readAsDataURL(file);
//   //   }
//   // }

//   handleFile(e) {
//     const files = Array.from(e.currentTarget.files);
//     let newFiles = [];

//     files.forEach((file) => {
//       const fileReader = new FileReader();

//       if (file) {
//         fileReader.readAsDataURL(file);
//       } else {
//         this.setState({
//           photoUrl: [],
//           photoFile: [],
//           photographer_id: this.props.photo.photographer_id,
//         });
//       }

//       fileReader.onloadend = () => {
//         newFiles.push(fileReader.result);
//         this.setState({
//           photoUrl: newFiles,
//           photoFile: files,
//           photographer_id: this.props.photo.photographer_id,
//         });
//       };
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData();

//     if (this.state.id) {
//       formData.append("photo[id]", this.state.id);
//     }

//     formData.append("photo[title]", this.state.title);
//     formData.append("photo[description]", this.state.description);
//     formData.append("photo[category]", this.state.category);
//     formData.append("photo[location]", this.state.location);
//     formData.append("photo[photographer_id]", this.state.photographer_id);
//     formData.append("photo[archived]", this.state.archived);

//     if (this.state.photoFile) {
//       for (let i = 0; i < this.state.photoFile.length; i++) {
//         formData.append("photo[photo][]", this.state.photoFile[i]);
//       }
//     }

//     this.props.action(formData).then(
//       this.setState({
//         title: "",
//         body: "",
//         photoFile: [],
//         photoUrl: [],
//         redirect: true,
//       })
//     );
//   }

//   render() {
//     const { formType, photo, errors } = this.props;
//     const { photoUrl } = this.state;
//     console.log("the state is", this.state, "this is the form = ", formType);

//     if (errors) {
//       const err = errors.map((error, i) => {
//         return <li key={i}>{error}</li>;
//       });
//     }

//     let uploadButton = formType == "Create Photo" ? "Upload" : "Save Changes";

//     if (this.state.redirect) {
//       return <Redirect to="/photos" />;
//     }
//   }
// }

import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";

class UploadPhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.photo.id || "",
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
    this.updateState = this.updateState.bind(this);
  }

  updateState(type) {
    return (e) => {
      this.setState({
        [type]: e.currentTarget.value,
      });
    };
  }

  // handleFile(e) {
  //   const file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     const image = new Image();
  //     image.src = fileReader.result;

  //     image.onload = () => {
  //       this.setState({
  //         photoFile: file,
  //         photoUrl: fileReader.result,
  //         photographerId: this.props.currentUserId,
  //         // title: file.name,
  //         title: e.value,
  //       });
  //     };
  //   };
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // }

  handleFile(e) {
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
    const formData = new FormData();
    // debugger;
    if (this.state.id) {
      formData.append("photo[id]", this.state.id);
    }
    formData.append("photo[title]", this.state.title);
    formData.append("photo[description]", this.state.description);
    formData.append("photo[category]", this.state.category);
    formData.append("photo[location]", this.state.location);
    formData.append("photo[photographer_id]", this.state.photographer_id);
    formData.append("photo[archived]", this.state.archived);
    if (this.state.photoFile) {
      for (let i = 0; i < this.state.photoFile.length; i++) {
        formData.append("photo[photo][]", this.state.photoFile[i]);
      }
    }

    // debugger
    this.props.action(formData).then(
      this.setState({
        title: "",
        body: "",
        photoFile: [],
        photoUrl: [],
        redirect: true,
      })
    );
  }

  render() {
    const { formType, photo, errors } = this.props;
    const { photoUrl } = this.state;
    console.log(this.state, "this is the", formType);

    if (errors) {
      const err = errors.map((error, i) => {
        return <li key={i}>{error}</li>;
      });
    }

    let uploadButton = formType === "Create Photo" ? "Upload" : "Save Changes";
    // let uploadButton = formType === "Edit Photo" ? "Save Changes" : "Upload";

    // const formPreview = { photoUrl };
    // const formPreview =
    //   // console.log(photoUrl);
    //   photoUrl.map((url, i) => {
    //     return (
    //       <li key={i}>
    //         <img className="upload-image" onClick={this.selectImg} src={url} />
    //       </li>
    //     );
    //   });

    if (this.state.redirect) {
      return <Redirect to="/photos" />;
    }

    const upload = (
      <>
        <div className="upload-photo-title">
          {formType === "Upload Photo" ? "Upload" : "Photo Manager"}
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
          <h3>Upload</h3>
        </div>

        <div className="upload-form-container">
          <div className="upload-form-preview-container">
            <div className="upload-form-preview">
              <img src={photoUrl} />
              {/* {formPreview} */}
            </div>
          </div>

          <div className="upload-form-container">
            <div className="upload-form">
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label>Photo Privacy</label>
                  <select
                    value={this.state.privacy}
                    onChange={this.updateState("privacy")}
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
                    onChange={this.updateState("title")}
                    placeholder="e.g. Young man surfing in the ocean"
                  />
                </div>

                <div>
                  <label>Description</label>
                  <textarea
                    value={this.state.description}
                    onChange={this.updateState("description")}
                    placeholder="e.g. Low angle view of young man surfing in the ocean with a clear blue sky"
                  />
                </div>

                <div>
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    value={this.state.location}
                    onChange={this.updateState("location")}
                  />
                  {/* <small>
                {this.state.locationValid ? '' : 'This field is required.'}
              </small> */}
                </div>

                <div>
                  <label>Category</label>
                  <select
                    value={this.state.category}
                    onChange={this.updateState("category")}
                  >
                    <option value="1">Uncategorized</option>
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
                <input
                  type="submit"
                  className="upload-button"
                  value={uploadButton}
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );

    // return <div>{formPreview.includes(photoUrl) ? uploadForm : upload}</div>;
    // return <div>{photoUrl ? uploadForm : upload}</div>;

    return <div>{photoUrl.length > 0 ? uploadForm : upload}</div>;
    // return <div>{photoUrl.length > 0 ? uploadForm : upload}</div>;
    // return <div>{uploadForm}</div>;
  }
}

export default withRouter(UploadPhotoForm);
