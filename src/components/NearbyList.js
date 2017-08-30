import React from 'react';
import { connect } from 'react-redux';

import ProfileListing from './ProfileListing';


class NearbyList extends React.Component {
  render() {
    const { profiles, onProfileClicked } = this.props;

    return (
      <div id='nearby-list'>
        <h2>Nearby List</h2>
        <ul>
            {profiles.map((profile) =>
              <ProfileListing
                key={profile.id}
                attributes={profile.attributes}
                onProfileClicked={onProfileClicked}
              />
            )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ profiles }) => ({
  profiles,
});

export default connect(mapStateToProps)(NearbyList);
