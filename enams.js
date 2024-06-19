"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 23] = "WINDOW"; // it will auto increment ==23
})(SeatChoice || (SeatChoice = {}));
var mySceat = SeatChoice.AISLE;
