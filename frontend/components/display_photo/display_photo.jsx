import React from 'react';
import { Link } from 'react-router-dom';

class DisplayPhoto extends React.Component {

  componentDidMount() {
    this.props.fetchPHoto(this.props.match.params.photoId)
  }

  render() {

    return (
     <div>
       hello?
     </div>
    )

  }
}

export default DisplayPhoto;