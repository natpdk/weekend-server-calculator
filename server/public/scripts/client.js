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

function getHistory() {
    axios({
        method: "GET",
        url: "/calculations"
    })
        .then((response) => {
            console.log("Successful GET /calculations: ", response.data)
            if (response.data.length > 0) {
                showMath(response.data)
            }
        })
        .catch((error) => {
            console.error("Error on GET at /Calculations: ", error)
        })
}

function onSubmit(event) {
    event.preventDefault()
    console.log("onSubmit() is a go.")

    const firstNumInput = document.getElementById("firstNumInput").value
    const secondNumInput = document.getElementById("secondNumInput").value

    let newMath = {
        numOne: Number(firstNumInput),
        numTwo: Number(secondNumInput),
        operator: operator
    }

    console.log("New math to send to the server: ", newMath)

    axios({
        method: "POST",
        url: "/calculations",
        data: newMath
    })
        .then((response) => {
            console.log("Successful POST to /calculations")

            getHistory()
            clearInputs(event)
        })
        .catch((error) => {
            console.error("Error on POST at /calculations: ", error)
        })
}

function clearInputs(event) {
    event.preventDefault()
    console.log("clearInputs() is a go.")

    document.getElementById("firstNumInput").value = ""
    document.getElementById("secondNumInput").value = ""
    operator = undefined
}

function showMath(history) {
    let historyList = document.getElementById("historyList")
    let recentResult = document.getElementById("recentResult")

    console.log("History list is: ", historyList)
    console.log("Recent result is: ", recentResult)
    console.log("Most recent number is: ", history[history.length-1].result)

    recentResult.innerText = history[history.length - 1].result

    historyList.innerHTML = ""

    for (let item of history) {
        console.log("Current item is: ", item)
        historyList.innerHTML +=`
             <li>
                ${item.numOne} ${item.operator} ${item.numTwo} = ${item.result}
            </li>
        `
    }
}