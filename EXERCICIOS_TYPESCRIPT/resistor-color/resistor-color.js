"use strict";
exports.__esModule = true;
exports.COLORS = void 0;
function colorCode(color) {
    return exports.COLORS.indexOf(color);
}
exports.COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
console.log(colorCode('black')); //0
console.log(colorCode('white')); //9
console.log(colorCode('orange')); //3
