import React from 'react';

class SelectedProfile extends React.Component {


  render(){
    const { image, tagline } = this.props;

    return(
      <div id="selected-profile">
        <button>return</button>
        <img src={ image } alt="selected profile"/>
        <p>{ tagline }</p>
        <button>Ping Me</button>
      </div>
    )
  }
}

export default SelectedProfile;
