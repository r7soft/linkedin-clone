const userPhotoPreviewImgElem = document.getElementById('user-photo-preview-img');
const userPhotoPreviewVideoElem = document.querySelector('#user-photo-preview-video');
const editUserPhotoCameraButtonElem = document.querySelector('#edit-user-photo-camera-button');
const editUserPhotoCameraCaptureButton = document.querySelector('#edit-user-photo-camera-capture-button');

let isCameraOn = false;
let stream = null;

const turnOnCamera =  ()=>{

            
            
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (videoStream) {
        stream = videoStream;
        userPhotoPreviewVideoElem.srcObject = stream;
        userPhotoPreviewImgElem.style.display = 'none';
        userPhotoPreviewVideoElem.style.display = 'block';
        editUserPhotoCameraCaptureButton.style.display = 'block';
        isCameraOn = true;
        editUserPhotoCameraButtonElem.textContent = 'Off camera';
    })
    .catch(function (error) {
        console.error('Error accessing the camera:', error);
    });
}

const turnOffCamera = ()=>{

    stream.getTracks().forEach(track => {
        track.stop();
    });
    userPhotoPreviewVideoElem.srcObject = null;
    userPhotoPreviewVideoElem.style.display = 'none';
    editUserPhotoCameraCaptureButton.style.display = 'none';
    isCameraOn = false;
    editUserPhotoCameraButtonElem.textContent = 'Use camera';
}

function accessCamera() {
    if (!isCameraOn) {

        
        turnOnCamera()
    } else {
        
        turnOffCamera()
    }
}

const captureButton = () => {


    const canvas = document.createElement('canvas');
    canvas.width = userPhotoPreviewVideoElem.videoWidth;
    canvas.height = userPhotoPreviewVideoElem.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(userPhotoPreviewVideoElem, 0, 0, canvas.width, canvas.height);
    userPhotoPreviewImgElem.style.display = 'initial';
    userPhotoPreviewImgElem.src = canvas.toDataURL('image/png');
    editUserPhotoCameraCaptureButton.textContent = 'Reset';

}
const resetButton = () => {
    userPhotoPreviewImgElem.src = '#';
    userPhotoPreviewImgElem.style.display = 'none';
    userPhotoPreviewVideoElem.style.display = 'initial';
    editUserPhotoCameraCaptureButton.textContent = 'Capture';
};


export { accessCamera, captureButton, resetButton , turnOffCamera };
