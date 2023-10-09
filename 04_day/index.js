console.log('Exercises');

// const age = parseInt(prompt('Enter your age: '))
// const minAge = 18

// if(minAge < age){
//     console.log(`your age is : ${age}`);
//     console.log("You are old enough to drive");
// }else{
//     console.log(`your age is : ${age}`);
//     console.log(`You are left with ${minAge - age} years to drive.`);
// }


// const myAge = parseFloat(prompt('Enter your age: '))
// const yourAge = parseFloat(prompt('Enter your age: '))

// if(isNaN(myAge) && isNaN(yourAge)){
//     console.log('Plase Enter valid Age');
// }else if(myAge > yourAge){
//     console.log(`My age is ${myAge}. Your age is ${yourAge} I'm older then you`);
// }else if(myAge < yourAge){
//     console.log(`Your age is ${yourAge}.My age is ${myAge} I'm not older then you.`);
// }else if(myAge === yourAge){
//     console.log('We are of the same age.');
// }

let a = 4;
let b = 3;

// if(a > b){
//     console.log(`${a} is greater than ${b}`);
// }else if(a < b){
//     console.log(`${b} is greater htan ${a}`);
// }

// a > b ? console.log(`A : ${a} is greater than B : ${b}`)
//         :console.log(`B : ${b} is greater than A : ${a}`)

// const evenOrOdd = parseInt(prompt('Enter a number :'))

// if(evenOrOdd % 2 === 0){
//         console.log(`Enter Number is ${evenOrOdd}. It's even number`);
// }else{
//         console.log(`Enter Number is ${evenOrOdd}. It's odd number`);
// }

const scores = 85;

if(isNaN(scores)){
        console.log('Plz enter a valid scores');
}else{
        let grad
        switch (scores) {
                case scores >= 80 && scores <= 100:
                        grad = "A";
                        console.log(grad);
                        break;
        
                default:
                        break;
        }
}

