

"use strict";

let ObjectValidators = {};


ObjectValidators.containsField = (obj,field)=>{
    return obj.hasOwnProperty(field);
}


module.exports = ObjectValidators;