// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
I:function of numbers 1 to 100
O:mutliples of three print "Fizz", multiples of five print "Buzz", multiples of both print "FizzBuzz"
C:
E:
*/

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
var fizz = [];
var buzz = [];
var fizzBuzz = [];
for (var i = 0; i < Array.length; i++){
    if (array[i] % 3 === 0){
        fizz.push(array[i])
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}