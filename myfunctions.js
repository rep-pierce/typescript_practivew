"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return "hello";
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
