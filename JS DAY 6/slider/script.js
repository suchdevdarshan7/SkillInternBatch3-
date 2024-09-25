let imageZero = 'https://cdn.pixabay.com/photo/2024/09/02/13/08/kingfisher-9016787_640.jpg';
let imageOne = 'https://cdn.pixabay.com/photo/2024/08/26/20/34/peacock-9000198_640.jpg'
let imageTwo = 'https://cdn.pixabay.com/photo/2022/05/21/02/40/cat-7210553_1280.jpg'
let imageThree = 'https://cdn.pixabay.com/photo/2024/04/09/22/28/trees-8686902_640.jpg'
let imageFour = 'https://cdn.pixabay.com/photo/2023/08/10/17/39/lamborghini-8182099_1280.jpg'


const imageContainer = document.querySelector('.image');

let i = 0;

function ChangeImages() {
    if (i === 0) {
        imageContainer.src = imageZero;
    }
    else if (i === 1) {
        imageContainer.src = imageOne;
    }
    else if (i === 2) {
        imageContainer.src = imageTwo;
    }
    else if (i === 3) {
        imageContainer.src = imageThree;
    }
    else if (i === 4) {
        imageContainer.src = imageFour;
    }
}

function NextImage() {
    i++;

    if (i <= 4) {
        ChangeImages()
    }
    else {
        i = 0;
        imageContainer.src = imageZero;
    }

}


function PreviousImage() {
    i--;

    if (i <= 4) {
        ChangeImages();
    }
    else {
        i = 4;
        imageContainer.src = imageFour;
    }


}



