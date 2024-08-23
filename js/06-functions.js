{
  // function invokation
  // HOISTING: puoi invocare una funzione prima di averla dichiarata
  console.log(sum(2, 3))

  // function declaration
  function sum(num1, num2) {
    return num1 + num2
  }
}

{
  // arrow function
  // sum: (x, y) -> x + y
  // let sum = (num1, num2) => {
  //   return num1 + num2
  // }
  
  let sum = (num1, num2) => num1 + num2
  
  // NO HOISTING
  console.log(sum(2, 3))
}

{
  // default parameters
  
  function sum(num1, num2 = 0) {
    return num1 + num2
  }

  console.log(sum(3))
}