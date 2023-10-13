console.log("💻 Exercises:Day 6");
//* Exercises: Level 1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


  // const array = [1,2,3,4,5,6,7,8,9,10]
  
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  //   console.log("For Loop: ",element);
  // }

  // let index = 0
  // while (index < array.length) {
  //   console.log('While Loop:',array[index]);
  //   index++
  // }

  // let index1 = 0
  // do {
  //   console.log('DO while',array[index1]);
  //   index1++
  // } while(index1 < array.length)
  
  
  




//   for (let i = 10; i > 0; i--) {
//     const element = i;
//     console.log("For Loop: ",element);
//   }

//   let i = 10
//   while (i > 0 ) {
//     console.log('While Loop:', i);
//     i--
//   }

//   let i1 = 10
//   do {
//     console.log('DO while', i1);
//     i1--
//   } while(i1 > 0)



//   function iterate(n){
//     for(let i = 0; i <= n; i++){
//         console.log(`Zero To N : ${i+1}`)
//     }
//   }
  
// iterate(5)


// function star(n){
//     for(let i = 1; i < n; i++){
//         let row = ' '
//         for(let j = 1; j < i; j++){
//             row += '*'
//         }
//         // console.log(row);
//     }
// }

// for(let i = 1; i <= 4; i++){
//   for(let j = 1; j <= i; j++){
    
//     // console.log(`I :${i} X J :${j} = ${i * j}`);
//   }
// }

for(let row = 1; row <= 9; row++){
  let i = ''
  for(let col = 1; col <= row; col++){
    i += "*"
  }
  console.log(i);
}

for(let i = 0; i <= 10; i++){
  console.log(`${i} X ${i} = ${i*i}`);
}


for(let i = 0; i <= 10; i++){
  console.log(`${i}  ${i*i}  ${i*i*i}`);
}
function evenOrOddNumber(n){
for(let i = 0; i <= n; i++){
  if(i % 2 === 0){
    console.log(`${i} is a even number`);
  }else{
    console.log(`${i} is a odd number`);
  }
}
}

// evenOrOddNumber(100)

for(let i = 0; i < 10; i++){
  if (i <= 1 && i <= 3 &&  i % 2 === 0 || i % 3 === 0) console.log(`${i} is a prime number`);
}


for(let i = 5; i > 0; i--){
  let stars = ''
  for(let j = 0; j < i; j++){
    stars += "* "
  }
  console.log(stars);
}

const primeNumberArray = []

function isPrime(n){
  if(n < 2){
    return false
  }
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0){
      return false
    }
  }
  return true
}


for(let i = 0; i < 100; i++){
  if(isPrime(i)){
    primeNumberArray.push(i)
  }
}

console.log(primeNumberArray);

const zeroToHunderNumber = []
for(let i = 0; i <= 100; i++){
  zeroToHunderNumber.push(i)
}

const sumOfAllNumber = zeroToHunderNumber.reduce((acc, curval) => acc + curval, 0)

console.log(`The sum of all numbers form 0 to 100 is : ${sumOfAllNumber}`);


const even = []
const odd = []

for(let i = 0; i <= 100; i++){
  if(i % 2 === 0){
    even.push(i)
  }else{
    odd.push(i)
  }
}

const evenSum = even.reduce((acc,curval)=>acc+curval,0)
const oddSum = odd.reduce((acc, curval)=>acc+curval,0)

console.log(`The sum of all evens from 0 to 100 is : ${evenSum}. And the sum of all odds from 0 to 100 is : ${oddSum}`);

const arrayRandomNumber = new Set()

for(let i = 0; i < 5; i++){
  const random = parseInt(Math.random() * i) + 1
  // Array.from(arrayRandomNumber.push(random))
}

// console.log(arrayRandomNumber);


function generateUniqueRandomNumbers(count, maxRange) {
  if (count > maxRange) {
    console.log("Cannot generate unique numbers; count exceeds range.");
    return [];
  }

  const uniqueNumbers = [];
  
  while (uniqueNumbers.length < count) {
    const randomNum = Math.floor(Math.random() * maxRange);
    
    if (!uniqueNumbers.includes(randomNum)) {
      uniqueNumbers.push(randomNum);
    }
  }

  return uniqueNumbers;
}

const uniqueRandomNumbers = generateUniqueRandomNumbers(5, 100);
console.log(uniqueRandomNumbers);




function generateArrayRandomNumber(count, maxRange){
  if(count > maxRange){
    console.log('Give a count under in Max Range in Hundered');
    return []
  }

  const uniqueRandomNum = []
  while(uniqueRandomNum.length < count){
    const random = parseInt(Math.random()*100)
    if(!uniqueRandomNum.includes(random)){
      uniqueRandomNum.push(random)
    }
  }
  return uniqueRandomNum
}

console.log('unique: ',generateArrayRandomNumber(5,100));




function generateRandomId(count,maxrange){
  if(count > maxrange){
    console.log('Give a count under in Max Range in Hundered');
    return []
  }

  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = ''
  for(let i = 0; i < count; i++){
    const randomIndex = Math.floor(Math.random()*characters.length)
    randomId += characters[randomIndex]
  }
  return randomId
}

console.log(generateRandomId(10,100));