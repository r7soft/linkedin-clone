import { photoUploader } from "./uploadPhoto.js";
import { accessCamera, captureButton , resetButton , turnOffCamera  } from "./accessCamera.js";


const editCoverPhotoInputElem = document.getElementById('edit-cover-photo-input');
const coverPhotoImg = document.getElementById('cover-photo-img');

const userPhotoContainerElem = document.querySelector('.user-photo-container');
const userPhotoEditContainerElem = document.getElementById('user-photo-edit-container');
const userPhotoEditContainerCloseButton = document.getElementById('user-photo-edit-container-close-button');
const userPhotoImgElem = document.querySelector('#user-photo-img');

const editUserPhotoInputElem = document.getElementById('edit-user-photo-input');
const userPhotoPreviewImgElem = document.getElementById('user-photo-preview-img');
const editUserPhotoSaveButtonElem = document.querySelector("#edit-user-photo-save-button");

const editUserPhotoCameraButtonElem = document.querySelector('#edit-user-photo-camera-button');
const editUserPhotoCameraCaptureButton = document.querySelector('#edit-user-photo-camera-capture-button');

editCoverPhotoInputElem.addEventListener('change', function () {
    photoUploader(coverPhotoImg, this.files);
});

userPhotoContainerElem.addEventListener('click', () => {
    userPhotoEditContainerElem.style.display = 'initial';
});
userPhotoEditContainerCloseButton.addEventListener('click', () => {
    userPhotoEditContainerElem.style.display = 'none';
});

editUserPhotoInputElem.addEventListener('change', function () {
    photoUploader(userPhotoPreviewImgElem, this.files);
    editUserPhotoSaveButtonElem.addEventListener('click', () => {
        userPhotoEditContainerElem.style.display = 'none';
        userPhotoImgElem.src = userPhotoPreviewImgElem.src;
        userPhotoImgElem.style.display = 'initial';
    });
});

editUserPhotoCameraButtonElem.addEventListener('click', () => {   

    let flag = 0

    accessCamera();  
    
    editUserPhotoCameraCaptureButton.addEventListener('click', function () {
        if (flag===0) {
            editUserPhotoCameraCaptureButton
            captureButton()
            flag = 1
            editUserPhotoSaveButtonElem.addEventListener('click', () => {
                turnOffCamera()
                userPhotoEditContainerElem.style.display = 'none';
                userPhotoImgElem.style.display = 'initial';
                userPhotoImgElem.src = userPhotoPreviewImgElem.src;
            });            
        }else{
            resetButton()
            flag = 0

        }


    });
});
