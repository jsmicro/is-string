'use strict';

if (!global.hasOwnProperty('isString')) global.isString = isString;
if (!global.hasOwnProperty('isNotString')) global.isNotString = isNotString;

/**
 * Check does the given javascript object is a String.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isString(object) {
    return toString.call(object) === '[object String]';
}

/**
 * Check does the given javascript object is not a String.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotString(object) {
    return !isString(object);
}

module.exports = {isString, isNotString};
