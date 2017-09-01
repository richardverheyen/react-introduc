import React from 'react';

class ProfileListing extends React.Component {

  render() {
    const { attributes } = this.props;
    return (
      <div>
        <img src={ attributes.image } alt="nearby profile introduc"/>
        <p>{ attributes.tagline }</p>
      </div>
    );
  }
}

export default ProfileListing;
