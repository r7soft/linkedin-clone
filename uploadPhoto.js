const photoUploader = (imagePreview, files) => {
    const file = files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = "#";
            imagePreview.style.display = 'block';

            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        imagePreview.src = '#';
    }
};

export { photoUploader };
