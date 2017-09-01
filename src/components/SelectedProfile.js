import React from 'react';
import { connect } from 'react-redux';

const SelectedProfile = ({selectedProfile}) =>
  <div>
    <img src={selectedProfile.data.attributes.image} alt="nearby profile introduc"/>
    <p>{selectedProfile.data.attributes.tagline}</p>
  </div>

const mapStateToProps = ({ selectedProfile }) => ({
  selectedProfile
});

export default connect(mapStateToProps)(SelectedProfile);
