let operator; //Global variable to holder operator

function onReady() {
    getHistory()
}
onReady()

function setOpt(event, op) {
    event.preventDefault()
    operator = op
    console.log("setOpt() is now: ", operator)
}