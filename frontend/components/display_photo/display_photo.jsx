import React from 'react';
import { Link } from 'react-router-dom';

class DisplayPhoto extends React.Component {

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId)
  }

  render() {
    const { photo } = this.props;

    if (!photo) return null

    return (
     <div>
       hello?
     </div>
    )

  }
}

export default DisplayPhoto;