// Lab 1: Utility Server

app.get('math/add', (req, res) =>{
    console.log(req, query);
    // {input: a; 12, b: 20}, sumString: "12 + 20", sum: 32}
    const input = {}; 
    let sumString = "";
    let sum = 0
for (const key in req.query) {
    // construct values needed for our return object
    console.log(key, req.query[key])
}
    // ? starts query string w/ key value pairs & puts them into an object for us
});
// template literal string w/ ``

// console.log(add(1,2,3,4,5,6,7,8,9,10))
app.get('math/multiply', (req, res) =>{
  console.log(req, query);
  // {input: a; 12, b: 20}, sumString: "12 + 20", sum: 32}
  const input = {}; 
  let sumString = "";
  let sum = 0
for (const key in req.query) {
  // construct values needed for our return object
  console.log(key, req.query[key])
}
  // ? starts query string w/ key value pairs & puts them into an object for us
});
const Math = (function() { // IIFE - immediately invoked func expression
  const add = (...rest) => rest.reduce((sum, a) => sum+a, 0)
  const multiply = (...rest) => rest.reduce((sum, a) => sum*a, 1)
  //const divide = (...rest) => rest.reduce((sum, a) => sum/a, 1)
  //const subtract = (...rest) => rest.reduce((sum, a) => sum-a)
  // OR const add = (a,b) => {return a+b}
  // const multiply = (a,b) => {return a*b}

  return {
    add,
    multiply,
   // divide,
   // subtract
  }
})();

Math.add()

module.exports = {
      add,
    multiply,
// divide,
// subtract
}
const Math = require('./math');

// const {add, multiply} = require('./math');
// also possible:  const Math = require('./math');

console.log(add, multiply);
console.log(moduole.exports);

/* You will create an Express server that takes in different routes to do random but COOL things!
Each of the routes are unique and takes in query parameters through GET requests
Each of the individual functionalities should be seperated into modules that you will build
Your routes should test for invalid inputs
Features
// Math Routes
localhost:3000/math/add?a=2&b=3
localhost:3000/math/multiply?a=2&b=3 */