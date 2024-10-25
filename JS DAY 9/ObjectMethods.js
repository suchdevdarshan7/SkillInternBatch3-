// let Data = {
//     firstname: "John",
//     lastname: "Cena",
//     profession: "wrestler",
//     company: "WWE",
//     age: 47
// }

// ['age', 'company', 'lastname', 'profession', 'firstname']
// console.log(Object.keys(Data))


// console.log(Object.values(Data))

// Object.seal(Data);
//We can update,read in seal method
//! we Cannot add new key value pair or delete the existing key values


// Data.firstname = 'Dhoni'

// console.log(Data)

// Data.netWorth = 10000000;

// delete Data.company;

// console.log(Data)

// const Check = Object.isSealed(Data)

// console.log(Check)

// let Data = {
//     firstname: "John",
//     lastname: "Cena",
//     profession: "wrestler",
//     company: "WWE",
//     age: 47
// }


// Object.freeze(Data);

//! Updation:
//^ Updation , Deletion, Creation of new key values is not possible

//~ Only reading of the values is possible


// Data.firstname = "Sachin";

// Data.networth = 500000000


// console.log(Data)

// let check = Object.isFrozen(Data);

// console.log(check)

// let Data = {
//     firstname: "John",
//     lastname: "Cena",
//     profession: "wrestler",
//     company: "WWE",
//     age: 47
// }
// console.log(Object.hasOwn(Data, 'centername'))

// const data = Object.entries(Data)

// let updatedData = data.flat(1);

// console.log(updatedData)

