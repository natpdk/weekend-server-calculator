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
                render(response.data)
            }
        })
        .catch((error) => {
            console.error("Error on GET at /Calculations: ", error)
        })
}