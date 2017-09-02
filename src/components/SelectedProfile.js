import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


const SelectedProfile = ({selectedProfile}) =>
  <section id="selected-profile">
    <Link to={`/`} className="return"><img src="/img/arrow-right.svg" alt=""/></Link>
    <img src={selectedProfile.data.attributes.image} alt="nearby profile introduc"/>
    <p>{selectedProfile.data.attributes.tagline}</p>
    <a id="ping-button">ping me</a>
  </section>

const mapStateToProps = ({ selectedProfile }) => ({
  selectedProfile
});

export default connect(mapStateToProps)(SelectedProfile);
