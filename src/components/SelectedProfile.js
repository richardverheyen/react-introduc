import React from 'react';
import { connect } from 'react-redux';

const SelectedProfile = ({profile}) =>
  <h1>{profile.id}</h1>

const mapStateToProps = ({ profile }) => ({
  profile
});

export default connect(mapStateToProps)(SelectedProfile);
