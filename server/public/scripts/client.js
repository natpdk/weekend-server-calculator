console.log('client.js is sourced!');

let operator;

function setOperator(event, op) {
    event.preventDefault()
    console.log("setOperator() has been called with: ", op)
}

function handleSubmit(event) {
    event.preventDefault()
    console.log("hanleSubmit() activated")
}

function handleClear(event) {
    event.preventDefault()
    console.log("handleClear() activated")
}