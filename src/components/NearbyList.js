import React from 'react';
import ProfileListing from './ProfileListing';

class NearbyList extends React.Component {
  render() {
    const { profiles } = this.props;

    return (
      <div>
        <h2>Nearby List</h2>
        <ul id='nearby-list'>
            {profiles.map((profile) =>
              <ProfileListing
                key={profile.id}
                attributes={profile.attributes}
              />
            )}
        </ul>
      </div>
    );
  }
}

export default NearbyList;
