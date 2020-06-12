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
    this.props.createPhoto(formData).then(() => {
      this.setState({
        photoFile: null,
        photoUrl: null,
        title: '',
        description:'',
        privacy: 1,
        location:'',
        category: 1,
        photographerId: this.props.currentUserId

      })
    })

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
        <div className='upload-photo-title'>
          <h3>Upload</h3>
        </div>
        <div className='upload-photo-container'>
          <div className='upload-photo-form'>
            <div className='upload-icon-container'>
              <img
                src={window.uploadIcon}
                className='upload-
                icon'
                height='40'
                width='40'
              />
            </div>
          
            {/* <svg width='100%' height='100%' viewbox='0 0 36 36' fill='none' xmns='http://www.w3.org/2000/svg' class='upload-arrow-icon-form'>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M8.66029 0.285116C8.29559 -0.0950387 7.70441 -0.0950387 7.33971 0.285116L0.302564 7.62259C0.0497699 7.86442 -0.0555065 8.23131 0.0283622 8.57817C0.112231 8.92503 0.371741 9.19603 0.70428 9.28399C1.03682 9.37196 1.38884 9.26275 1.62116 8.99953L7.06608 3.32224V15.0262C7.06608 15.564 7.48421 16 8 16C8.51579 16 8.93392 15.564 8.93392 15.0262V3.32224L14.3788 8.99953C14.6112 9.26275 14.9632 9.37196 15.2957 9.28399C15.6283 9.19603 15.8878 8.92503 15.9716 8.57817C16.0555 8.23131 15.9502 7.86442 15.6974 7.62259L8.66029 0.285116Z' fill='#222222' />
            </svg> */}
            <p>Upload a photo</p>
              <input
                type='file'
                name='photo-upload'
                id='photo-upload'
                accept='image/*'
                className='custom-file-input'
                title='  '
                style={{color: 'transparent'}}
                //^removes default 'choose a file text
                onChange={this.handleFile.bind(this)}
              />
          </div>
            <div className='upload-form-bottom-container'>
              <div className='upload-form-bottom'>
                <div className='form-bottom-text'>
                  <h4>Photo requirements</h4>
                    <ul>
                      <li>.jpg only</li>
                      <li>Max. photo dimensions are 200MP/megapixels</li>
                    </ul>
                </div>
                <div className='form-bottom-text'>
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
      <div className='upload-photo-title'>
          <h3>Upload</h3>
      </div>

      <div className='upload-form-container'>
      <div className='upload-form-preview-container'>
        <div className='upload-form-preview'>
          <img src={photoUrl} />
        </div>
      </div>
      

      <div className='upload-form-container'>
        <div className='upload-form'>
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
              {/* <small>
                {this.state.titleValid ? '' : 'Please enter a title.'}
              </small> */}
            </div>

            <div>
              <label>Description</label>
              <textarea
                value={this.state.description}
                onChange={this.updateState('description')}
                placeholder='e.g. Low angle view of young man surfing in the ocean with a clear blue sky'
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
              {/* <small>
                {this.state.locationValid ? '' : 'This field is required.'}
              </small> */}
            </div>
          

            <div>
              <label>Category</label>
              <select
                value={this.state.category}
                onChange={this.updateState('category')}>
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
                <option value='11'>Family</option>
                <option value='12'>Fashion</option>
                <option value='13'>Film</option>
                <option value='14'>Fine Art</option>
                <option value='15'>Food</option>
                <option value='16'>Journalism</option>
                <option value='17'>Landscape</option>
                <option value='18'>Macro</option>
                <option value='19'>Nature</option>
                <option value='20'>Night</option>
                <option value='21'>Nude</option>
                <option value='22'>People</option>
                <option value='23'>Performing Arts</option>
                <option value='24'>Sports</option>
                <option value='25'>Still Life</option>
                <option value='26'>Street</option>
                <option value='27'>Transportation</option>
                <option value='28'>Travel</option>
                <option value='29'>Underwater</option>
                <option value='30'>Urban Exploration</option>
                <option value='31'>Wedding</option>
              </select>
              </div>

              <button 
                onClick={this.handleSubmit}>Upload</button>
            </form>
          </div>
        </div>
      </div>
      </>
    );

    return <div>{photoUrl ? uploadForm : upload}</div>;
    // return <div>{photoUrl ? uploadForm : uploadForm}</div>;
  }
}

export default UploadPhotoForm;