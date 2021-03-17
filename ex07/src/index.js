
function logicalAndOperator (num) {

    // Only change code below this line
  
    if (num > 40 && num < 80){
            
          return "Yes";
      
    }
    
      // Only change code above this line
      return "No";
}
    console.log(logicalAndOperator(0));
    console.log(logicalAndOperator(24));
    console.log(logicalAndOperator(45));
    console.log(logicalAndOperator(57));
    console.log(logicalAndOperator(100));

  

module.exports = logicalAndOperator;