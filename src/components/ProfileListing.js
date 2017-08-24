import React from 'react';

class ProfileListing extends React.Component {
  render() {
    const { attributes } = this.props;
    return (
      <li>
        <p>{ attributes.tagline }</p>
        <img src={ attributes.image }/>
      </li>
    );
  }
}

export default ProfileListing;
