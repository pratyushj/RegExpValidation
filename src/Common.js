"use strict";

var ObjectValidators = {};

/**
 *
 * @param val
 * @returns {*|boolean}
 */
ObjectValidators.isEmpty = (val)=> {

    var dataType = Object.prototype.toString.call(val);

    if (['[object Number]', '[object RegExp]', '[object Boolean]'].indexOf(dataType) != -1) { // Numbers and RegEx can not be empty

        return false;
    }
    if (['[object Null]', '[object Undefined]', '[object WeakMap]', '[object WeakSet]'].indexOf(dataType) != -1) {

        return true;
    }
    /**
     * Entities which  can be empty :
     * 1. Object,
     * 2. Array
     * 3. Strings
     * 4. Map
     * 5. Set
     */

    if (dataType == '[object Object]') {

        return Object.keys(val).length == 0;

    } else if (['[object Map]', '[object Set]'].indexOf(dataType) != -1) {

        return val.size == 0;

    }

    return val.length == 0
};

module.exports = ObjectValidators;