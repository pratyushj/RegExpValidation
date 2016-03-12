
"use strict";

var NumberValidators = {};

NumberValidators.isPositive =  (number)=> {
    return parseFloat(number) > 0
};

NumberValidators.isNegative =  ( number )=>{
    return parseFloat(number) < 0
};

NumberValidators.isNumber =  ( number )=>{
    return /^-?\d+$/.test(number)
};

NumberValidators.isDecimalNumber =   ( number )=>{
    return /^-?\d+\.\d+$/.test(number)
};

NumberValidators.hasNDecimalPlaces =  (number ,n )=> {
    var regExp = new RegExp(`^-?\\d+\.\\d{0,${n}}$`);
    return regExp.test(number)
};

module.exports = NumberValidators;



