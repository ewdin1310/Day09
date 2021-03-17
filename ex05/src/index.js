
function compareStrictValue(m) {
    if (m != 55 ) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
console.log(compareStrictValue(55));
console.log(compareStrictValue("55"));
console.log(compareStrictValue("21"));
console.log(compareStrictValue(12));
console.log(compareStrictValue("Doe"));

    // Only change code below this line
  
    // Only change code above this line

  

module.exports = compareStrictValue;