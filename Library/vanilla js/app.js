const button = document.querySelector('button')
const heading = document.querySelector('h1')
let clicked = false;
const a = 10;

button.addEventListener('click', () => {


    if (clicked) {
        heading.innerHTML = a;
        clicked = false;
    }
    else {
        heading.innerHTML = "";
        clicked = true;
    }

})