let boxes = document.querySelectorAll('.box');


// boxes.forEach(element => element.addEventListener('click', () => {
//     CloseOther()
//     element.classList.add('active');
// }))


// function CloseOther() {
//     boxes.forEach((element) => {
//         element.classList.remove('active');
//     })
// }


boxes.forEach((element) => {
    element.addEventListener('click', function () {
        element.classList.toggle('active');
    })
})