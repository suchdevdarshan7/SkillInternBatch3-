const array = [1, 2, 3, 4, 5];

//! Index will always start with 0

//! the length will be caclulated in terms of 1 based counting

// console.log(array[5])
// console.log(array.length)

let ansInForEach = array.forEach((element, index, array) => {
    return element;
})

let ansMap = array.map((element, index, array) => {
    return element ** 2;
})

// console.log(ansInForEach)
// console.log(ansMap)

