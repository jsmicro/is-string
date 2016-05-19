(function() {
    'use strict';

    if (!window.hasOwnProperty('isString')) window.isString = isString;
    if (!window.hasOwnProperty('isNotString')) window.isNotString = isNotString;

    function isString(object) {
        return toString.call(object) === '[object String]';
    }

    function isNotString(object) {
        return !isString(object);
    }
})();
