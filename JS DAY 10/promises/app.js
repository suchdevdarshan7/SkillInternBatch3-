let promise = new Promise((res, rej) => {

    setTimeout(() => {
        rej('I am rejected');
    }, 1000)

}).then((d) => {
    console.log(d)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("I will work in both the cases rejected and resolved state")
})

//! resolved rejected and pending 


console.log(promise)