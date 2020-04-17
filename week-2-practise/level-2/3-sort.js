// Update the variable `sortedLetters`.
// It should contain the values of `letters` and `letters2` in ascending order

var letters = ["a", "n", "c", "e", "z", "f"];
var letters2 = ["w", "b", "v", "g", "l", "o"];

var sortedLetters = letters.sort() + " " + letters2.sort(function (a, b) { // ONLY EDIT THIS LINE
  
  if (a > b){
    return 1;
  }
  if (a < b){
    return -1;
  }
  if (a === b){
    return 0;
    }
});

console.log(sortedLetters);


/* 
  EXPECTED RESULT
  ---------------
  [ 'a', 'b', 'c', 'e', 'f', 'g', 'l','n', 'o', 'v', 'w', 'z' ]
*/
