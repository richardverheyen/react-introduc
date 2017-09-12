import React from 'react';
import { Link } from 'react-router-dom';
import NearbyList from './NearbyList';
import UserLocation from './UserLocation';

class MainPage extends React.Component {

  render(){
    const { onProfileClicked, profiles } = this.props;

    return(
      <section id="main-page">
        <Link to={`/user`} id="customise-button"><img src="/img/arrow-down-big.svg" alt=""/></Link>
        <UserLocation />
        <NearbyList profiles={profiles} onProfileClicked={onProfileClicked}/>
      </section>
    )
  }
}
export default MainPage
