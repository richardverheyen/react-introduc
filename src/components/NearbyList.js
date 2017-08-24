import React from 'react';
import ProfileListing from './ProfileListing';

class NearbyList extends React.Component {
  render() {
    const { profiles } = this.props;

    return (
      <div id='nearby-list'>
        <h2>Nearby List</h2>
        <ul>
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
