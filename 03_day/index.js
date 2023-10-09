console.log("💻 Day 3: Exercises");

const firstName = 'ankit'
const lastName = 'Pandey'
const country = 'Bhart'
const city = 'Kanpur'
const age = 31
const isMarried = false
const year = 2023




console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

const word1 = 'python';
const word2 = 'jargon';

const length1 = word1.length;
const length2 = word2.length;

const isFalsy = length1 === length2;

console.log(`Length of "${word1}": ${length1}`);
console.log(`Length of "${word2}": ${length2}`);
console.log(`Falsy Comparison: ${isFalsy}`);


console.log(4 > 3 && 10 < 12)  //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12)  //true
console.log(4 > 3 || 10 > 12)  //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true
// There is no 'on' in both dragon and python

let word3 = 'dragon'
let word4 = 'python'

console.log(word3.includes("on") && word4.includes("on"));


const date = new Date()
const myDate = Date.now()
console.log(date.getFullYear()) //2023
console.log(date.getMonth()) //09
console.log(date.getDate()) //08
console.log(date.getDay()) //0
console.log(date.getHours()) //24
console.log(date.getMinutes()); //34
console.log(Math.floor(date.getTime / 1000));



// Get the current date and time
const currentDate = new Date();

// Get the number of milliseconds since January 1, 1970
const millisecondsSince1970 = currentDate.getTime();

// Convert milliseconds to seconds (1 second = 1000 milliseconds)
const secondsSince1970 = Math.floor(millisecondsSince1970 / 1000);

console.log(`Seconds elapsed since January 1, 1970: ${secondsSince1970} seconds`);


// Exercises: Level 2

// const base = prompt("Enter Base: ")
// const height = prompt("Enter height: ")
// const area = alert(`The area of the triangle is ${0.5 * base * height}`)


// const a = parseInt(prompt('Enter side a: '))
// const b = parseInt(prompt('Enter side b: '))
// const c = parseInt(prompt('Enter side c: '))
// const triangle = alert(`The perimeter of the triangle is ${a + b + c}`)


// const length = parseFloat(prompt('Enter length: '))
// const width = parseFloat(prompt('Enter width: '))
// const rectangle = alert(`perimeter of rectangle ${2 * (length + width)}`)


// area = pi * r * r
// circle = 2 * pi * r
// pi = 3.14

// const circle = parseInt(prompt('Enter radius: '))
// const circleArea = alert(`${3.14 * circle * circle}`)
// const circleCircum = alert(`${ 2 * 3.14 * circle }`)


// const xint = parseInt(prompt('x-intercept: '))
// const yint = parseInt(prompt('y-intercept: '))

// const slope = alert(`x-intercept ${yint = 2*xint - 2}`)

