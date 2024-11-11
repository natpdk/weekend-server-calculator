const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = []


// Here's a wonderful place to make some routes:

// GET /calculations
  //Respond with calculations[].

app.get('/calculations', (req, res) => {
  res.send(calculations)
})

// POST /calculations
  //req.body = incoming calculation
  //call function to get result (getResult(incCalculation))
    //Will return a result number.
  //Add result to incCalc object as a 'result' key.
  //Push incCalc to calculations[]
  //Respond with status code 201 (created)

app.post('/calculations', (req, res) => {
  console.log("Incoming req.body: ", req.body)


  //give it a new name so it's easier to remember what it is
  const newCalculation = req.body

  const result = getResult(newCalculation)
  newCalculation.result = result
  console.log("Result: ", newCalculation)

  calculations.push(newCalculation)
  console.log("Calcualtions history after push: ", calculations)

  res.sendStatus(201)
})

function getResult(calc) {
  //Switch statement to compare the operator
    //ex. if '+' then we will return calc.firsNum + calc.secondNum

    switch (calc) {
      case "+":
          //will add
          return calc.firstNum + calc.secondNum
      case "-":
          //will subtract
          return calc.firstNum - calc.secondNum
      case "*":
          //will multiply
          return calc.firtNum * calc.secondNum
      case "/":
          //will divide
          return calc.firstNum / calc.secondNum
      default:
        return NaN
    }
}



// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5002;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
