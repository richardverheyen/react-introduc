import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CurrentUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      image: 'img/ewatson.jpg',
      tagline: 'hello'
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

export default CurrentUser
