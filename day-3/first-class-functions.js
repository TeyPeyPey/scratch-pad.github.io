// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
/*
I:input base of either a string or number 
O:return a function that tests whether a given value is greater than the base
C:
E:
*/

function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return function(greaterThanBase){return num > base;}
//}
   
    
    // YOUR CODE ABOVE HERE //
};

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
/*
I:input base of either a string or number
O:return a function that tests whether a given value is less then the base 
C:test means true or false 
E:
*/

function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(){

    }
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
/*
I:single character, startsWith
O:return a function that tests whether a given string starts with the startsWith character
C:function needs to be case insensitive
E:
*/

function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(){

    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
/*
I:single character, endsWith 
O:return a function that tests whether a given string ends with the endsWith character
C:function needs to be case insensitive
E:
*/

function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(){

    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
/* 
I:array of strings and a function designed to modify a string 
O:return the array of the strings modified
C:
E:
*/

function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/*
I: array of strings and a function designed to test the string in some way
O:return a boolean on whether it passed, return true if ALL strings pass the test.
C:
E:
*/

function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}