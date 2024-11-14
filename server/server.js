const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

// calculation objects:
let calculations = []


app.get('/calculations', (req, res) => {
  res.send(calculations)
})

app.post('/calculations', (req, res) => {
  console.log("Incoming calculation: ", req.body)
  const newCalc = req.body

  const result = getResult(newCalc)
  newCalc.result = result
  console.log("Result is: ", newCalc)

  calculations.push(newCalc)
  console.log("History after push: ", calculations)

  res.sendStatus(201)
})

function getResult(calc) {
  //Switch statement to compare the operator
    //ex. if '+' then we will return calc.firsNum + calc.secondNum

    switch (calc.operator) {
      case "+":
          //will add
          return calc.numOne + calc.numTwo
      case "-":
          //will subtract
          return calc.numOne - calc.numTwo
      case "*":
          //will multiply
          return calc.numOne * calc.numTwo
      case "/":
          //will divide
          return calc.numOne / calc.numTwo
      default:
        return null
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
