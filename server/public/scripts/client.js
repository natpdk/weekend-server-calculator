console.log('client.js is sourced!');

let operator;

function setOperator(event) {
    event.preventDefault()
}

function handleSubmit(event) {
    event.preventDefault()
    console.log("hanleSubmit() activated")
}

function handleClear(event) {
    event.preventDefault()
    console.log("handleClear() activated")
}