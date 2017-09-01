import React from 'react';
import { connect } from 'react-redux';
import { setSelectedProfile } from '../reducer/profile/actions';

import ProfileListing from './ProfileListing';

const NearbyList = ({ profiles, setProfile }) =>
  <div id='nearby-list'>
    <h2>Nearby List</h2>
    <ul>
        {profiles.map((p) =>
          <li
            key={p.id}
            onClick={ setProfile(p.id) }>
            <ProfileListing attributes={p.attributes}/>
          </li>
        )}
    </ul>
  </div>

const mapStateToProps = ({ profiles }) => ({
  profiles,
});

const mapDispatchToProps = dispatch => ({
  setProfile(id) { //creates a closure
    return () => {
      dispatch(setSelectedProfile(id));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NearbyList);
