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
let output = [];
for (let i = 1; i <= 0; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        output.push("fizzBuzz");
    } else if (i % 3 === 0) {
        output.push('fizz');
    } else if (i % 5 === 0) {
        output.push('buzz');
    } else {
        output.push(i.toString());
    }
}
return output;
}
    // YOUR CODE GOES ABOVE HERE //





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}