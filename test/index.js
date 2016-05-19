const $ = require('../main');

const test = require('jsmicro-test');

// Call function to give arguments
StartTest('first', 2, ['thrid']);

function StartTest() {
    // Run the isString() Test.
    test($.isString)
        .accept('Test')
        .reject([])
        .reject({})
        .reject(() => {})
        .reject(true)
        .reject(false)
        .reject(test.args(arguments))
        .queue(true);

    // Run the isNotString() Test.
    test(isNotString)
        .accept(10)
        .accept([])
        .accept({})
        .accept(() => {})
        .accept(true)
        .accept(false)
        .accept(test.args(arguments))
        .reject('Test')
        .queue(true);
}
