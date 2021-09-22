import handleOperators from "./handleOperators.js";
import handleOperationIntoScreen from "./handleOperationIntoScreen.js";
import clearAll from "./clearAll.js";

const keyboard = document.querySelector(".keyboard");

const operators = [1, 2, 3, "-", 4, 5, 6, "+", 7, 8, 9, "*", ".", 0, "=", "/"];

handleOperators(keyboard, operators);

const btn = document.querySelectorAll(".btn-keyboard");
const btnClearAll = document.getElementById("clearAll");
const screen = document.querySelector("#screen-container");

handleOperationIntoScreen(btn, screen);
clearAll(btnClearAll, screen);
