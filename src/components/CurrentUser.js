import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



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

  render() {
    const { currentUser } = this.state; //set currentUser from the store

    return (
    <section id="customise-user">
      <ul>
        <li>
          <p>upload your image here:</p>
          <input
            type="input"
            onChange={this.imageUpdated}
            name="image"
            value={this.state.image}
          />
        </li>
        <li>
          <p>upload your tagline here:</p>
          <input
            type="input"
            onChange={this.taglineUpdated}
            name="tagline"
            value={this.state.tagline}
          />
        </li>
        <button className='post-button'>Post up to the server</button>
      </ul>
      <Link to={`/`} className="return"><img src="/img/arrow-down-big.svg" alt=""/></Link>
    </section>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

export default connect(mapStateToProps)(CurrentUser)