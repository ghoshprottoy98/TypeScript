"use strict";
let lname;
lname = "Prottoy";
let newname = lname.toUpperCase();
console.log(newname);

let empList;
empList = ["We", "Will", "Rock"];

let numlist;
numlist = [1, 2, 3, 4, 5];

let results = numlist.filter((num) => num > 2);

let num = numlist.find((num) => num === 2);

let sum = numlist.reduce((acc, num) => acc + num);

console.log(results);

console.log(num);

console.log(sum);

var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
