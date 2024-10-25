const form = document.querySelector('form');

// console.log(form)

let dataOfPerson = {};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e)

    let username = document.querySelector("input[type='text']").value
    let password = document.querySelector("input[type='password']").value

    if (username === '' || password === '') {
        alert('Hey idiot fill the form')
        return;
    }
    else {
        dataOfPerson = { username, password };
        console.log(dataOfPerson)
        SendDataToBackend(dataOfPerson)
    }
})


async function SendDataToBackend(dataOfPerson) {
    let objectModified = JSON.stringify(dataOfPerson);

    let response = await fetch('http://localhost:3000/form', {
        method: "POST",
        body: objectModified,
        headers: {
            'Content-type': 'application/json',
        }
    })
    let data = await response.json();

    console.log(data);
}