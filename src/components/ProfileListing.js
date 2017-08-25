import React from 'react';

class ProfileListing extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onProfileClicked, attributes } = this.props
    onProfileClicked( attributes );
  }

  render() {
    const { attributes } = this.props;
    return (
      <li onClick={this.onClick}>
        <img src={ attributes.image } alt="nearby profile introduc"/>
        <p>{ attributes.tagline }</p>
      </li>
    );
  }
}

export default ProfileListing;
