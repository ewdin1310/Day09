
function logicalOrOperator (num) {

    // Only change code below this line
  
    if (num < 20 || num > 30){
            
          return "Out";
      
    }
    
      // Only change code above this line
      return "In";
}
    console.log(logicalOrOperator(0));
    console.log(logicalOrOperator(9));
    console.log(logicalOrOperator(20));
    console.log(logicalOrOperator(23));
    console.log(logicalOrOperator(30));
    console.log(logicalOrOperator(31));
    console.log(logicalOrOperator(105));

  

module.exports = logicalOrOperator;