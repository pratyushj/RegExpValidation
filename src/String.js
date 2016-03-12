"use strict";
var StringValidations =  {};



/**
 *
 * @param string
 * @param minSize
 * @returns {*|boolean}
 */
StringValidations.isSizeSmallerThanN = (string, minSize)=> {
    return string ? string.length < minSize :  minSize > 0
};


/**
 *
 * @param string
 * @param maxSize
 * @returns {*|boolean}
 */

StringValidations.isSizeGreaterThanN = (string, maxSize)=>{
    return string ? string.length > maxSize: maxSize < 0
};

/**
 * Testing for a valid email address
 *
 */
StringValidations.isValidEmail =  (string)=> {
    return string ? /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(string) : false
};


StringValidations.containsOnlyLetters =  (string)=> {
    return string ? /^[a-zA-Z]+$/.test(string) : false
};


StringValidations.containsOnlySmallCaseLetters = (string)=>{
    return  /^[a-z]+$/.test(string);
};

StringValidations.containsOnlyCapsLetters = ( string )=>{
    return /^[A-Z]+$/.test(string);
};

StringValidations.isStringWithSplChars =  ( string )=>{

};
StringValidations.matchStringWithPattern =  (string, pattern)=>{
    pattern = (typeof pattern == 'string') ? new RegExp(pattern) : pattern;
    return pattern instanceof RegExp ? pattern.test(string) : false
};


module.exports = StringValidations;



