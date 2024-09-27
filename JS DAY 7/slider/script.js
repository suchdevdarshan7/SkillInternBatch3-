const Images = ['https://cdn.pixabay.com/photo/2024/09/02/13/08/kingfisher-9016787_640.jpg',
    'https://cdn.pixabay.com/photo/2024/08/26/20/34/peacock-9000198_640.jpg',
    'https://cdn.pixabay.com/photo/2022/05/21/02/40/cat-7210553_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/04/09/22/28/trees-8686902_640.jpg',
    'https://cdn.pixabay.com/photo/2023/08/10/17/39/lamborghini-8182099_1280.jpg'
]

const ImageContainer = document.querySelector('.image');
const PreviousButton = document.querySelector('.previous-btn');
const NextButton = document.querySelector('.next-btn');
let imageCounter = 0;



function NextImage() {
    imageCounter++;
    if (imageCounter < Images.length) {
        ImageContainer.src = Images[imageCounter];
    }
    else {
        imageCounter = 0;
        ImageContainer.src = Images[imageCounter];
    }
}

function PreviousImage() {
    imageCounter--;
    if (imageCounter > 0) {
        ImageContainer.src = Images[imageCounter];
    }
    else {
        imageCounter = Images.length - 1;
        ImageContainer.src = Images[imageCounter];
    }
}



//! Buttons to go previous image and next image

NextButton.addEventListener('click', NextImage)
PreviousButton.addEventListener('click', PreviousImage)





