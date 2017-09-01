import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


const SelectedProfile = ({selectedProfile}) =>
  <div id="selected-profile">
    <Link to={`/`}><img src="/img/arrow-right.svg" alt=""/></Link>
    <img src={selectedProfile.data.attributes.image} alt="nearby profile introduc"/>
    <p>{selectedProfile.data.attributes.tagline}</p>
  </div>

const mapStateToProps = ({ selectedProfile }) => ({
  selectedProfile
});

export default connect(mapStateToProps)(SelectedProfile);
