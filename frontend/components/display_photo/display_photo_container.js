import { connect } from 'react-redux';

import { fetchPhoto } from '../../actions/photo_actions';
import DisplayPhoto from './display_photo';

export default connect(mSTP. mDTP)(DisplayPhoto);