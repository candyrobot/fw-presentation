var string = require('./utils/string');

console.log(string.nl2br('some texts'));





/// or ///////////////////////////////////////////////
var utils = require('./utils');

console.log(utils.string.nl2br('some texts2'));










require(['utils'], function(utils) {
    var result = utils.add(10, 21);
    console.log('10 + 21 = ' + result);
});