
function MyEqualFunction(num) {
    if (num === 23) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
console.log(MyEqualFunction(5));
console.log(MyEqualFunction(23));
console.log(MyEqualFunction("23"));
console.log(MyEqualFunction('23'));
console.log(MyEqualFunction("text"));
    // Only change code below this line
  
    // Only change code above this line

  

module.exports = MyEqualFunction;