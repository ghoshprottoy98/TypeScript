
let lname: string;

lname="Prottoy";

let newname= lname.toUpperCase();

console.log(newname);


let empList: string[];

empList = ["We", "Will", "Rock"];

let numlist: Array<number>;

numlist= [1,2,3,4,5];

let results= numlist.filter((num) => num > 2);

let num= numlist. find((num) => num === 2);

let sum= numlist.reduce((acc, num)=> acc + num);

console.log(results);
console.log(num);
console.log(sum);

enum Color {
    Red,
    Green,
    Blue
}

let c: Color= Color.Blue;

let swapNum: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2:number): [number, number]
{
    return [num2, num1]
}

swapNum= swapNumbers(10,20);

swapNum[0];
swapNum[1];


let department;

department= "IT";
department= 10;



