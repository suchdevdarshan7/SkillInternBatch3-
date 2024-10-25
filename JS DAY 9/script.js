let Data = {
    firstname: "John",
    lastname: "Cena",
    profession: "wrestler",
    company: "WWE",
    age: 47
}

//! Destructuring :

// console.log(firstname) //! Uncaught ReferenceError: firstname is not defined

// const { firstname, lastname, profession, company, age } = Data;

// console.log(firstname)
// console.log(lastname)
// console.log(profession)
// console.log(company)
// console.log(age)

const { firstname: Name } = Data;

console.log(Name)

