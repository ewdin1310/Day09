
function switchCase (letter) {

    // Only change code below this line
    switch (letter){
        case "a":
            animals = "antilope";
            break;
        case "b":
            animals = "bird";
            break;
        case "c":
            animals = "cat";
            break;
        default:
            animals = "stuff";
            break;
    }

      // Only change code above this line
      return animals;
}
switchCase(1);

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase("4"));

  

module.exports = switchCase;