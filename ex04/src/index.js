
function compareDifferentValue(m , n) {
    if (m === n) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
console.log(compareDifferentValue(8, "8"));
console.log(compareDifferentValue("8", 8));
console.log(compareDifferentValue('8', 8));
console.log(compareDifferentValue("8", "8"));
console.log(compareDifferentValue(8, 8));

    // Only change code below this line
  
    // Only change code above this line

  

module.exports = compareDifferentValue;