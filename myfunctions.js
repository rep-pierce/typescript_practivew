"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("name: " + name + " | email: " + email + " | is paid: " + isPaid);
};
var myValue = addTwo(5);
getUpper("hi ryan");
signUpUser("ryan", "ryan@gmail.com", false);
loginUser("ryan", "ryan@gmail.com");
loginUser("ashley", "ashley@gmail.com", true);
// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "Hello ".concat(s);
};
// const heroes = ["thor", "spiderman", "ironman"];
var heroes = [1, 2, "ironman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
