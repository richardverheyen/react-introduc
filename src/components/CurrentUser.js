import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postCurrentUser } from '../reducer/currentUser/actions';

import { imageUploader } from './image-upload/imageUploader';

class CurrentUser extends Component {


  constructor(props) {
    super(props);

    this.state = {
      tagline: ''
    };
    this.taglineUpdated = this.taglineUpdated.bind(this);
  }

  taglineUpdated(e) {
    const { value } = e.target;
    this.setState({ tagline: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const { sendToStore } = this.props;

    sendToStore({
      image: this.state.image,
      tagline: this.state.tagline
    });
  }

  render() {
    return (
    <section id="customise-user">
      <form onSubmit={this.handleFormSubmit}>
        <p>upload your image here:</p>
        <div id="image-input">
          <input
            type="file"
            accept="image/*"
          />
          <img src="/img/placeholder-user-photo.png"/>
        </div>
        <div>
          <p>upload your tagline here:</p>
          <input
            type="input"
            onChange={this.taglineUpdated}
            name="tagline"
            value={this.state.tagline}
            placeholder={JSON.parse(localStorage.getItem('currentUser')).attributes.tagline}
          />
        </div>
        <button type='submit' className='post-button'>Post up to the server</button>
      </form>
      <Link to={`/`} className="return"><img src="/img/arrow-down-big.svg" alt=""/></Link>
    </section>
    )
  }
  componentDidMount() {
    imageUploader();
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  sendToStore(currentUser) {
    dispatch(
      postCurrentUser(currentUser)
    );
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(CurrentUser)
