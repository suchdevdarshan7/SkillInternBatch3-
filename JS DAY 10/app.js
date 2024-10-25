//! Json--> javascript object notatation:

let object = {
    name: "Somename",
    age: 12,
    dept: "No-dept"
}


let jsonVariable = JSON.stringify(object); //Json object:

let conversionToNormal = JSON.parse(jsonVariable);

console.log(jsonVariable);

console.log(conversionToNormal)


