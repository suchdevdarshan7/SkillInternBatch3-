// array.forEach(element => {

// });

// array.map(element=>{


// })

// let array = [1, 2, 3, 4, 5];
// let numberToBeAdded = 100;

// array.push(10, 20)

// console.log(array)


// let array = [1, 2, 3, 4, 5, 100];

// array.pop()

// console.log(array)


// let array = [1, 2, 3, 4, 5, 6];

// array.shift()

// console.log(array)

// let array = [1, 2, 3, 4, 5, 6];

// array.unshift(100);

// console.log(array)


// let colors = ['red', 'blue', 'green', 'yellow', 'pink', 'white', 'black'];


// const isIncluded = colors.includes('');

// console.log(isIncluded)


// let colors = ['red', 'blue', 'green', 'yellow', 'pink', 'white', 'black'];

// colors.splice(0, 1);

// console.log(colors)


// colors.splice(2, 0, 'purple', 'brown', 'violet');

// console.log(colors)

// let colors = ['red', 'blue', 'green', 'yellow', 'pink', 'white', 'black'];

// const color = colors.slice(3, 5);

// console.log(colors)
// console.log(color)

// let colors = ['red', 'blue', 'green', 'yellow', 'pink', 'white', 'black'];

// const isValid = colors.find(element => element === 'blue');

// console.log(isValid)

// let colors = ['red', 'blue', 'green', 'yellow', 'pink', 'white', 'black'];

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let oddArray = numbers.filter(element => element % 2 === 1);

// let evenArray = numbers.filter(element => element % 2 === 0);

// console.log(oddArray);
// console.log(evenArray);


// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.reverse())

// let numbers = [1, 2, 3, 4, 5, [1, 2, 3, 4, [1, 2, 3, 4]]];

// let newArray = numbers.flat(2);

// console.log(newArray)

let CartProducts = [
    {
        id: 1,
        name: 'Playstation 5',
        price: 50000,
    },
    {
        id: 2,
        name: 'Apple Iphone 16 pro max 1 Tb',
        price: 200000,
    },
    {
        id: 3,
        name: 'Macbook Pro 16 inch 1 Tb',
        price: 180000,
    },
    {
        id: 4,
        name: 'Apple Ipad 11 inch 1 Tb',
        price: 540000
    }

]

const sumOfCart = CartProducts.reduce((acc, element) => {
    return acc + element.price;
}, 0)

console.log(sumOfCart)