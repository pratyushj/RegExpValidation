

"use strict";

let ObjectValidators = {};


ObjectValidators.containsField = (obj,field)=>{
    return obj.hasOwnProperty(field);
};


export default ObjectValidators;