import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { setCurrentUser } from '../reducer/currentUser/actions';

class CurrentUser extends Component {


  constructor(props) {
    super(props);

    this.state = {
      image: '',
      tagline: ''
    };
    this.imageUpdated = this.imageUpdated.bind(this);
    this.taglineUpdated = this.taglineUpdated.bind(this);
  }

  imageUpdated(e) {
    const { value } = e.target;
    this.setState({ image: value });
  }
  taglineUpdated(e) {
    const { value } = e.target;
    this.setState({ tagline: value });
  }

  // handleFormSubmit = (event) => {
  //   event.preventDefault()
  //   const { sendToStore } = this.props;
  //
  //   sendToStore({
  //     id: '',
  //     type: 'profile',
  //     attributes: {
  //       image: this.state.image,
  //       tagline: this.state.tagline
  //       // lat: document.position.coords.latitude,
  //       // lng: document.position.coords.longitude
  //     }
  //   });
  // }

  render() {
    // const { currentUser } = this.state; //set currentUser from the store

    return (
    <section id="customise-user">
      <form>
        <div>
          <p>upload your image here:</p>
          <input
            type="input"
            onChange={this.imageUpdated}
            name="image"
            value={this.state.image}
          />
        </div>
        <div>
          <p>upload your tagline here:</p>
          <input
            type="input"
            onChange={this.taglineUpdated}
            name="tagline"
            value={this.state.tagline}
          />
        </div>
        <button  className='post-button'>Post up to the server</button>
      </form>
      <Link to={`/`} className="return"><img src="/img/arrow-down-big.svg" alt=""/></Link>
    </section>
    )
  }
}
//
// const mapStateToProps = ({ currentUser }) => ({
//   currentUser
// });
//
// const mapDispatchToProps = dispatch => ({
//   sendToStore(currentUser) {
//     dispatch(
//       setCurrentUser(currentUser)
//     );
//   }
// });

// export default connect(mapStateToProps,mapDispatchToProps)(CurrentUser)
export default CurrentUser
