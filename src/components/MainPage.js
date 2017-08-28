import React from 'react';
import NearbyList from './NearbyList'

class MainPage extends React.Component {

  render(){
    const { onProfileClicked, profiles } = this.props;

    return(
      <div>
        <NearbyList profiles={profiles} onProfileClicked={onProfileClicked}/>
      </div>
    )
  }
}
export default MainPage
