"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function addnumber(num) {
    return num + 2;
}
var getHello = function (s) {
    return "";
};
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
}
var login = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
addTwo(5);
getUpper("hai");
signUpUser("Yogesh", "ok@gmail.com", "taiml", true);
login("n", "n$n");
// function getValue(myVal:number):boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 ok"
// }
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]
heros.map(function (hero) { return "hero is ".concat(hero); });
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
