
"use strict";

let NumberValidators = {};

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
    let regExp = new RegExp(`^-?\\d+\.\\d{0,${n}}$`);
    return regExp.test(number)
};

export default NumberValidators;



