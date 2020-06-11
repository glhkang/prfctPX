import React from 'react';

class UploadPhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      archived: false,
      location: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const image = new Image();
      image.src = fileReader.result;

      image.onload = () => {
        this.setState({
          photoFile: file,
          photoUrl: fileReader.result,
          photographerId: this.props.currentUserId,
          title: file.name,
        });
      };
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateState(type) {
    return (e) => {
      this.setState({
        [type]: e.currentTarget.value,
      });
    };
  }

  render() {
    const { photoUrl } = this.state;
    const upload = (
      <>
        <div className='upload-photo-header'>
          <h3>Upload</h3>
        </div>
        <div className='upload-photo-container'>
          <div className='upload-photo-form'>
            <h3>&#8593;</h3>
            <p>Upload a photo</p>
            <input
              type='file'
              name='photo-upload'
              id='photo-upload'
              accept='image/*'
              className='custom-file-input'
              title=''
              onChange={this.handleFile.bind(this)}
            />

            <p>More text here</p>
          </div>
        </div>
      </>
    );

    const uploadForm = (
      <>
        <div className='upload-form-preview'>
          <img src={photoUrl} />
        </div>
        <div className='upload-form-container'>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Photo Privacy</label>
              <select
                value={this.state.privacy}
                onChange={this.updateState('privacy')}
              >
                <option value='1'>Public</option>
                <option value='2'>Unlisted</option>
              </select>
            </div>

            <div>
              <label for='title'>Title</label>
              <input
                type='text'
                id='title'
                value={this.state.title}
                onChange={this.updateState('title')}
                placeholder='e.g. Young man surfing in the ocean'
              />
              <warning>
                {this.state.titleValid ? '' : 'Please enter a title.'}
              </warning>
            </div>

            <div>
              <label>Description</label>
              <textarea
                value={this.state.description}
                onChange={this.updateState('description')}
                placeholder='e.g. Low angle view of young African man surfing in the ocean with a clear blue sky'
              />
            </div>

            <div>
              <label for='location'>Location</label>
              <input
                type='text'
                id='location'
                value={this.state.location}
                onChange={this.updateState('location')}
              />
              <warning>
                {this.state.locationValid ? '' : 'This field is required.'}
              </warning>
            </div>
          </form>

          <div>
            <label>Category</label>
            <select
              value={this.state.category}
              onChange={this.updateState('category')}
            >
              <option value='1'>Uncategorized</option>
              <option value='2'>Abstract</option>
              <option value='3'>Aerial</option>
              <option value='4'>Animals</option>
              <option value='5'>Black and White</option>
              <option value='6'>Boudoir</option>
              <option value='7'>Celebrities</option>
              <option value='8'>City &amp; Architecture</option>
              <option value='9'>Commercial</option>
              <option value='10'>Concert</option>
              <option value='11'>Concert</option>
              <option value='12'>Family</option>
              <option value='13'>Fashion</option>
              <option value='14'>Film</option>
              <option value='15'>Fine Art</option>
              <option value='16'>Food</option>
              <option value='17'>Journalism</option>
              <option value='18'>Landscape</option>
              <option value='19'>Macro</option>
              <option value='20'>Nature</option>
              <option value='21'>Night</option>
              <option value='22'>Nude</option>
              <option value='23'>People</option>
              <option value='24'>Performing Arts</option>
              <option value='25'>Sports</option>
              <option value='26'>Still Life</option>
              <option value='27'>Street</option>
              <option value='28'>Transportation</option>
              <option value='29'>Travel</option>
              <option value='30'>Underwater</option>
              <option value='31'>Urban Exploration</option>
              <option value='32'>Wedding</option>
            </select>
          </div>

          <button>Upload</button>
        </div>
      </>
    );

    return <div>{photoUrl ? uploadForm : upload}</div>;
  }
}

export default UploadPhotoForm;

//with modal below
// import React from 'react';

// class UploadPhotoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       description: '',
//       archived: false,
//       location: '',
//     };
//     // const { modal } = this.props;

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//   }

//   render() {
//     const { modal, closeModal } = this.props;

//     const upload = (
//       <div>
//         <input
//           type='file'
//           name='photo-upload'
//           id='photo-upload'
//           accept='image/*'
//         >
//           {/* <label htmlFor='photo-upload' className='upload-button'>
//           <h3>&#8593;</h3>
//           <p>Upload a photo</p>

//         </label> */}
//         </input>
//       </div>
//     );
//     // if (!modal) {
//     //   return null;
//     // }

//     return (
//       <div className='upload-photo-container'>
//         <h3>Upload</h3>
//         <div className='upload-photo-form'>
//           <input
//             type='file'
//             name='photo-upload'
//             id='photo-upload'
//             accept='image/*'
//           >
//             {/* <label htmlFor='photo-upload' className='upload-button'>
//           <h3>&#8593;</h3>
//           <p>Upload a photo</p>

//         </label> */}
//           </input>
//         </div>
//       </div>

//       //delete below...don't need modal
//       // <div className='modal-background' onClick={closeModal}>
//       //   <div className='modal-child' onClick={e => e.stopPropagation()}>
//       //     { upload }
//       //   </div>
//       // </div>
//     );
//   }
// }

// export default UploadPhotoForm;
