// function getUser() {
//     console.log("Hello i am user1")
// }

// getUser()

// console.log('hello')


// class CreateUser {
//     greetUser() {
//         console.log("Welcome to this class")
//     }
// }

// let func = new CreateUser

// func.greetUser();

// let name = 10;
// let number = "Hello"


let a = 10;

a = 'Myname';


let array = [1, 2, 3, 4, 5];

//! Declarative :
let newArray = array.map(el => el ** 2);


//! Imperative
let newArray2 = [];

for (let i = 0; i < array.length; i++) {
    newArray2[i] = array[i] ** 2;
}


console.log(newArray)
console.log(newArray2)