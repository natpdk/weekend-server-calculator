let operator; //Global variable to holder operator

//will rund code when the app first loads
function onReady(){
    getHistory()
}
onReady()

//Function to assign the operatro the correct value.
function setOperator(event, op) {
    event.preventDefault()
    operator = op
    console.log("setOperator() has been called with: ", operator)
}

//Will perform GET request to get history from server.
function getHistory() {
    //Axios GET request
    //sent to '/calculations'
    //render history to DOM and rencer recentResult
    axios({
        method: "GET",
        url: "/calculations"
    })
        .then((response) => {
            console.log("success on GET /calcutions: ", response.data)

            if (response.data.length > 0) {
                render(response.data) // will render history list and recentResult
            }
        })
        .catch((error) =>{
            console.log("Error on GET /calculatons: ", error)
        })
}

//Submitting three pieces of information that need to be bundled into an object.
//Will send newCalc to server.

function handleSubmit(event) {
    event.preventDefault()
    console.log("hanleSubmit() activated")

    const firstNumInput = document.getElementById("firstNumInput").value
    const secondNumInput = document.getElementById("secondNumInput").value

    let newCalc = {
        firstNum: Number(firstNumInput),
        secondNum: Number(secondNumInput),
        operator: operator
    }

    console.log("new calc to send to server: ", newCalc)

    //Axios POST request, newCalc will be the data.
    //Send to /calculation
    //Retrieve the history from the server
    //Update the DOM and replace whatever it has currently.
    //Clear the form.
    //When the page loads, show what the history is on the server.

    axios({
        method: "POST",
        url: "/calculations",
        data: newCalc
    })
    .then((response) => {
        console.log("Success with POST to /calcultions")
        // Will retrieve the latest history, which includes rendering to DOM
        getHistory()
        handleClear(event)
    })
    .catch((error) =>{
        console.log("Error on POST /calculatons: ", error)
    })

}

//Need a selector for the two inputs.
//assign them to empty.
//Set operator to undefined.
function handleClear(event) {
    event.preventDefault()
    console.log("handleClear() activated")

    // Selector for the 2 inputs
    // Assign them to ""
    // Set operator to 'undefined'
    document.getElementById("firstNumInput").value = ""
    document.getElementById("secondNumInput").value = ""
    operator = undefined
}

function render(history) {
    let historyList = document.getElementById("historyList")
    let recentResult = document.getElementById("recentResult")

    console.log("historyList: ", historyList)
    console.log("recentResult: ", recentResult)
    console.log("recent result number is: ", history[history.length-1].result)

    //replaace recentResult on DOM
    recentResult.innerText = history[history.length-1].result


    historyList.innerHTML = ""

    //render the history list
    for (let item of history) {
        console.log("Current history item: ", item)

        historyList.innerHTML += `
        <li>
          ${item.firstNum} ${item.operator} ${item.secondNum} = ${item.result}
        </li>
        `
    }
}