
"use strict";

let FilterObject = {};


FilterObject.filterNumbers = ( string )=>{
        return String(string).replace(/\D+/g,'').replace(/\W+/,'').replace(/\_+/,'');
};

FilterObject.filterCharacters = ( string )=>{
    return String(string).replace(/\d+/g,'').replace(/\W+/,'').replace(/\_+/,''); //remove numbers and special characters
};

module.exports = FilterObject;