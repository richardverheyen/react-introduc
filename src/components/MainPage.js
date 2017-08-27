import React from 'react';
import { get } from 'axios';
import NearbyList from './NearbyList'

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };

    this.onPutRequest = this.onPutRequest.bind(this);
  }

  onPutRequest(profiles) {
    get(`http://localhost:3000/profiles`)
    .then(({ data }) => {
      this.setState({ profiles: data.data }); //this is verbose because Rails should spit out the raw array
    });
  }

  render(){
    const { onProfileClicked } = this.props;
    const { profiles } = this.state;

    return(
      <div>
        <NearbyList profiles={profiles} onProfileClicked={onProfileClicked}/>
        <button onClick={this.onPutRequest}>Put request</button>
      </div>
    )
  }
}
export default MainPage
