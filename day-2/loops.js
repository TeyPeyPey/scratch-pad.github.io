// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/*
I:loop forward over the input array
O:prints the array values to the console in number form
C:
E:
*/

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //loop over the array 
  for (var i = 0; i < array.length; i++){
  //print the values to the console using console.log
  console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //

}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I:loop backwards over the input array
O:print the array values to the console in number form
C:
E:
*/

function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //loop over the array backwards
  for (var i = array.length - 1; i >= 0; i--){
  //print the values to the console using console.log
  console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/*
I:given an input object
O:return an array containing the inputs object keys in string form
C:
E:
*/

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
//return an array containing the input object keys
return object.keys(object);

  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I:an input object 
O:loop over the object and print its keys 
C:
E:
*/

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (key in printObjectKeys) {
    if (printObjectKeys.hasOwnProperty(key));
  }
  value = printObjectKeys[key];
  console.log(key, value);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I:an input object 
O:return an array containing the objects values. 
C:
E:
*/

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  return Object.values(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/*
I:input object
O:loop over the object and print its values 
C:
E:
*/

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}