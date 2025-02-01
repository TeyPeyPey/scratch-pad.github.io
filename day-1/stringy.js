// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I:function takes in a string.
O:function returns a number of the length of the input string.
C:
E:
*/

function length(string) {
    // YOUR CODE BELOW HERE //
//return the input string's length
return string.length
}
console.log('teyonce');

    
    // YOUR CODE ABOVE HERE //




/**
 * Given an input String, return a new String forced to lowercase.
 */

/*
I:function takes in a string.
O:function returns a new string forced to lowercase.
C:
E:
*/

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   //return string in lowercase
   return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}
console.log(toLowerCase("TEYONCE"));

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I:function takes in a string.
O:function returns a new string forced to uppercase.
C:
E:
*/

function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//return string in uppercase
return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}
console.log(toUpperCase("micheal"));

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/*
I:function takes in a string
O:function returns a new string forced to dash-case.
C:
E:
*/

function toDashCase(string) {
    // YOUR CODE BELOW HERE //
        // YOUR CODE BELOW HERE //
        //create array for input string 
        var placeHolder = string.split(' ');
        //join the array into a string with dashes 
        var ans = placeHolder.join('-');
        return ans.toLowerCase();
        // YOUR CODE ABOVE HERE //
    }
console.log(toDashCase('Hello World'));
    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I:given a string and a character as the parameters
O:return true if the string begins with the character, false otherwise
C:
E:
*/

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
if (string.toLowerCase().startsWith(char.toLowerCase())) {
    return true;
} else {
    return false;
}
}
    // YOUR CODE ABOVE HERE //

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I:string
O:true if the string ends with the character, false otherwise 
C:
E:
*/

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
if (string.toLowerCase().endsWith(char.toLowerCase())) {
    return true;
} else {
    return false;
}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I:two strings
O:return the strings concatenated into one
C:
E:
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//return the two strings concat as one
return stringOne.concat(stringTwo);



    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I:any number of strings 
O:return all the strings joined together
C:
E:
*/

function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments)
    return args.join('');

    // YOUR CODE ABOVE HERE //
}
/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I:two strings
O:return the longest string of the two 
C:
E:
*/

function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
   if (stringOne.length > stringTwo.length){
    return stringOne;
   } else {
    return stringTwo;
   }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I:two strings
O:return 1 if the first string is higher in the alphabet then the second, return -1 if the second is higher, return 0 if they're equal
C:
E:
*/

function sortAscending(stringOne, stringTwo) {
if (stringOne < stringTwo){
    return 1;
} else if (stringOne > stringTwo) {
    return -1;
} else {
    return 0;
}
}
/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne > stringTwo){
        return 1;
    } else if (stringOne < stringTwo) {
        return -1;
    } else {
        return 0;
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}