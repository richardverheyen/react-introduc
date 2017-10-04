import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postCurrentUser } from '../reducer/currentUser/actions';

class CurrentUser extends Component {


  constructor(props) {
    super(props);

    this.state = {
      image: {},
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
    let imageInput = document.getElementById('image-input');
    imageInput.addEventListener('change', PreviewImage);

    function PreviewImage() {
      let file = imageInput.childNodes[0].files[0];
      if (validFileType(file)) {
        var imagePreview = document.createElement('img');
        imagePreview.src = window.URL.createObjectURL(file);
        imageInput.append(imagePreview);
      } else {
        let para = document.createElement('p');
        para.textContent = 'File name ' + file.name + ': Not a valid file type. Try a .jpg or .png instead.';
        imageInput.appendChild(para);
      }
    }

    var fileTypes = [
      'image/jpeg',
      'image/jpg',
      'image/pjpeg',
      'image/png'
    ]

    function validFileType(file) {
      for(var i = 0; i < fileTypes.length; i++) {
        if(file.type === fileTypes[i]) {
          return true;
        }
      }
      return false;
    }
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
