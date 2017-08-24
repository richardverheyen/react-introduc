import React from 'react';

class ProfileListing extends React.Component {
  render() {
    const { attributes } = this.props;
    return (
      <li>
        <img src={ attributes.image }/>
        <p>{ attributes.tagline }</p>
      </li>
    );
  }
}

export default ProfileListing;
