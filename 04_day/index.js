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

// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }


// let weather = 'cloudy'
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.')
//     break
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.')
//     break
//   case 'sunny':
//     console.log('Go out freely.')
//     break
//   default:
//     console.log(' No need for rain coat.')
// }

// Switch More Examples
// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday')
//     break
//   case 'tuesday':
//     console.log('Today is Tuesday')
//     break
//   case 'wednesday':
//     console.log('Today is Wednesday')
//     break
//   case 'thursday':
//     console.log('Today is Thursday')
//     break
//   case 'friday':
//     console.log('Today is Friday')
//     break
//   case 'saturday':
//     console.log('Today is Saturday')
//     break
//   case 'sunday':
//     console.log('Today is Sunday')
//     break
//   default:
//     console.log('It is not a week day.')
// }




const score = parseFloat(prompt('Enter the student\'s score:'));

switch (true){
        case score >= 80 && score <= 100:
                console.log('A')
                break
        case score >= 70 && score <= 79:
                console.log('B')
                break
        case score >= 60 && score <= 69:
                console.log('C')
                break
        case score >= 50 && score <= 59:
                console.log('D')
                break
        default:
                console.log("F");
                break
}
