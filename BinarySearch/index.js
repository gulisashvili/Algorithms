/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var binarySearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;

  while (min <= max) {
    guess = (Math.floor((min + max) / 2));

    if (array[guess] === targetValue) { return guess } 
    else if (array[guess] < targetValue) { min = guess + 1 } 
    else { max = guess - 1 }
  
  }

  return -1;
};
