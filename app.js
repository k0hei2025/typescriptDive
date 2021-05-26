var add = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num;
};
var car;
car = add;
var addNumber = add(3, 5, 4, 5, 5, 6, 6, 7, 7, 4, 43, 5, 5, 5, 4);
var showNumber = car(13, 5, 4, 5, 5, 6, 6, 7, 7, 4, 43, 5, 5, 5, 4);
console.log("addNumber " + addNumber);
console.log("showNumber " + showNumber);
