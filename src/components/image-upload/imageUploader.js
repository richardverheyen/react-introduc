import { API_URL } from '../../constants';
import { readFile } from './readFile';

export function imageUploader(){
  let imageInput = document.getElementById('image-input');
  imageInput.addEventListener('change', PreviewImage);

  function PreviewImage() {
    let file = imageInput.childNodes[0].files[0];
    if (validFileType(file)) {
      let imagePreview = document.getElementById('preview-image');
      let newSrc = window.URL.createObjectURL(file);
      imagePreview.setAttribute('src', newSrc);
console.log(file);
      let croppedImageData = readFile(file);
      let signedS3 = getSignedRequest(file);

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

  function getSignedRequest(file) {
    return fetch(`${API_URL}/signer?fileName=${file.name}&fileType=${file.type}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      });
  }
}
