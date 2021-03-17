
function checkSing (num) {
    // Only change code below this line.
    
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
// Only change code above this line
}
console.log(checkSing(10));
console.log(checkSing(-12));
console.log(checkSing(0));
   

      

module.exports = checkSing;