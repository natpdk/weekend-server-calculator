console.log('client.js is sourced!');

let operator; //Global variable to holder operator

//Function to assign the operatro the correct value.
function setOperator(event, op) {
    event.preventDefault()
    console.log("setOperator() has been called with: ", operator)
    operator = op
}

//Will perform GET request to get history from server.
function getHistory() {
    //Axios GET request
    //sent to '/calculations'
    //render history to DOM and rencer recentResult
}

//Submitting three pieces of information that need to be bundled into an object.
//Will send newCalc to server.
function handleSubmit(event) {
    event.preventDefault()
    console.log("hanleSubmit() activated")

    let newCalc = {
        firstNum: "FIRST_NUMBER",
        secondNumber: "SECOND_NUMBER",
        operator: "OPERATOR"
    }

    //Axios POST request, newCalc will be the data.
    //Send to /calculation
    //Retrieve the history from the server
    //Update the DOM and replace whatever it has currently.
    //Clear the form.
    //When the page loads, show what the history is on the server.


}

//Need a selector for the two inputs.
//assign them to empty.
//Set operator to undefined.
function handleClear(event) {
    event.preventDefault()
    console.log("handleClear() activated")

}