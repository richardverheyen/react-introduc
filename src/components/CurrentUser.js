import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postCurrentUser } from '../reducer/currentUser/actions';

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
        <div>
          <p>upload your image here:</p>
          <input
            type="input"
            onChange={this.imageUpdated}
            name="image"
            value={this.state.image}
            placeholder={JSON.parse(localStorage.getItem('currentUser')).attributes.image}
          />
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
