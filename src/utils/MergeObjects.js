"use strict";
module.exports = function(){ //dont move it to array functions, you dont get argument object
    var combined = Array.prototype.slice.call(arguments);
    var combinedObj  = {};

    combined.forEach((classType)=>{
        Object.keys(classType).forEach((methodName)=>{
            if(classType.hasOwnProperty(methodName)){
                combinedObj[methodName] = classType[methodName]
            }
        })
    });
    return combinedObj;
};