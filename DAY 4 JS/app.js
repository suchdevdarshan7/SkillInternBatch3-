//! Function declaration:
//! Function definition
//! Function call
//! parameters
//! arguments

//! Dry --> Do not repeat yourself :

// function wish() {
//     //! Function definition
//     console.log('Welcome to my webpage')
// }

// wish()

//! in declaration we call it as parameter

// function calculate(number1, number2) {

//     console.log(number1 + number2)
// }

// calculate(10, 20)

//! When passing the value we will call it as arguments


//~ Named function

// function sum(a,b){
//     console.log(a+b);
// }

// sum()

//~ Anonymous function :

// function (){
//     console.log('Hello')
// }

//~ function with expression

// const a = function () {
//     console.log('hi')
// }

// a()

//! Arrow function

// const a = () =>
// {
//     console.log('hello')
// }

//~ IIFE function
//! Immediately invoking function expression
//! self invoked functions


// (function () {
//     console.log('I am a iife function')
// })();

//! Callback function
//~ A function which is passed as an to a higher order function

// function callback() {
//     console.log('I am a callback ')
// }


//! Higher order function

//~ A function that accepts a callback function as a parameter or returns a function


// function HOF(cb) {
//     cb()
//     console.log('I am a Higher order function ')
// }

// HOF(() => {
//     console.log('Welcome to this new callback function')
// });


// function calculate1(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     // console.log(arguments)
//     console.log(this)
// }

// const calculate = () => {
//     console.log(this)

// }

// calculate(10, 20, 30, 40, 50, 60, 70, "Myname")
// let obj = new calculate1(20, 405, 60)

// const a = true;

// const b = false;

const a = 11;

const condtion = a > 10;

if (condtion) {
    console.log('I am the truth condition');
}

console.log('I will works always ')

const app = () => {
    console.log('Hello world!');
}

console.log(app)

const Book = () => {
    console.log('Hello world!')
}