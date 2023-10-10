console.log('💻 Day 5: Exercises');
// //* 💻 Exercise
//  const countries = [
//      'Albania',
//      'Bolivia',
//      'Canada',
//      'Denmark',
//      'Ethiopia',
//      'Finland',
//      'Germany',
//      'Hungary',
//      'Ireland',
//      'Japan',
//      'Kenya'
//   ]
  
//   const webTechs = [
//      'HTML',
//      'CSS',
//      'JavaScript',
//      'React',
//      'Redux',
//      'Node',
//      'MongoDB'
//   ]


//   const emptyArray = []

// const arrayWithNum = [ 1, 2, 3, 4, 5]

// const itCompanies = [ 'Facebook', 'Google' ,'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

 


// function firstMiddleLast(array){
//     const firstIndex = 0
//     const middleIndex = parseInt(array.length / 2)
//     const lastIndex = array.length - 1
//     console.log(array);
//     console.log(`LengthOfArray : ${array.length}`);
//     console.log(`FirstIndexItem : ${array[firstIndex]}`);
//     console.log(`MiddleIndexItem : ${array[middleIndex]}`);
//     console.log(`LastIndexItem : ${array[lastIndex]}`);
//  }
 

//  firstMiddleLast(itCompanies)
//  firstMiddleLast(arrayWithNum)

//  itCompanies.forEach(item => console.log(item))

//  const uppercaseName = itCompanies.toString().toUpperCase()

//  console.log(uppercaseName);
 

// function arrayTostring(array){
//     if(array.length === 0){
//         return ''
//     }else if(array.length === 1){
//         return array[0]
//     }else{
//         // const lastIndex = array.pop()
//         const sentence = array.join(', ') + ', and ' + lastIndex + " are big IT companies.";
//         return sentence;
//     }
// }

// // console.log(arrayTostring(itCompanies));

// const companyNameToCheck = "Tcs";
// function toCheckCompani(companyName){
//     if(itCompanies.includes(companyName)){
//         return `${companyName} exists in the array.`
//     }else{
//         return `${companyName} is not found.`;
//     }
// } 

// console.log(toCheckCompani(companyNameToCheck));

// // const filteredCompanies =  itCompanies.filter((company)=>{
// //     const oCount = (company.match(/o/gi) || []).length;
// //     return oCount > 1;   
// // })

// // console.log(filteredCompanies);

// // console.log(itCompanies.sort())
// // console.log(itCompanies.reverse())


// function filterCompaniesWithMultipupleOs(companies){
//     const filteredCompanies = []

//     for(let i = 0; i < companies.length; i++){
//         const companyName = companies[i];
//         let count = 0
//         for(let j = 0; j < companyName.length; j++){
//             if(companyName[j] === 'o' || companyName[j] === 'O'){
//                 count++
//             }
//             if(count > 1){
//                 break
//             }
//         }

//         if(count > 1){
//             filteredCompanies.push(companyName)
//         }
//     }
//     return filteredCompanies
// }

// console.log(filterCompaniesWithMultipupleOs(itCompanies))

// const firstThree = itCompanies.slice(0, 3)
// console.log(firstThree);
// const lastThree = itCompanies.length - firstThree.length
// console.log(lastThree)
// console.log(itCompanies.slice(lastThree,itCompanies.length))

// console.log(itCompanies);
// const middleIndex = Math.floor(itCompanies.length / 2)
// console.log( itCompanies.slice(middleIndex,itCompanies.length-3) );

// // const removeFirst = itCompanies.shift()
// // console.log(removeFirst);

// const removeMiddle = itCompanies.splice(middleIndex, 1 )
// console.log("Middle copmany",removeMiddle);
// console.log(itCompanies);


// const removeLast = itCompanies.splice(itCompanies.length-1, itCompanies.length)
// console.log('last company: ',removeLast);
// console.log(itCompanies);


// while(itCompanies.length > 0){
//     itCompanies.pop()
// }

// console.log(" empty arr: ", itCompanies);



console.log('Exercise: Level 2');


// main.js
const countries = require('./countries');
// const webTechs = require('./web_techs');

// console.log('Countries:', countries);
// console.log('Web Technologies:', webTechs);


let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.length)

const cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
console.log(cleanText);
const textInToArray = cleanText.split(" ")
console.log(textInToArray);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']




if(shoppingCart[0] === "Meat" ){
    console.log(`Meat is alrady ther`) 
}else{
    console.log(shoppingCart.unshift("Meat"));
    console.log(shoppingCart);
}

if(shoppingCart[shoppingCart.length - 1] === "Sugar" ){
    console.log(`Sugar is alrady ther`) 
}else{
    console.log(shoppingCart.push("Sugar"));
    console.log(shoppingCart);
}

if(true){
    const indexOfHoney = shoppingCart.indexOf('Honey')
    const indexOfTea = shoppingCart.indexOf('Tea')
    if(indexOfHoney !== -1 && indexOfTea !== -1){
        const reomoveHeney = shoppingCart.splice(indexOfHoney, 1)
        console.log("remove Honey: ",reomoveHeney);
        const addGreenTea = shoppingCart[indexOfTea] = "Green Tea"
        console.log("add Green Tea: ",addGreenTea);
    }
}

console.log(shoppingCart);


// if(countries.indexOf("Ethiopia") !== -1){
//     console.log('ETHIOPIA')
//     console.log(countries.indexOf('Ethiopia'));
// }else{
//     countries.push('ETHIOPIA')
// }


// if(webTechs.indexOf("Sass") !== -1){
//     console.log('Sass is a CSS preprocess')
//     console.log(countries.indexOf('Sass'));
// }else{
//     webTechs.push('Sass')
//     console.log(webTechs);
// }

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log('FullStack: ',fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const sortAges = ages.sort((a,b)=>a -b)
const minAge = ages[0]
const maxAge = ages[ages.length - 1]
console.log('Sorted Ages:', ages);
console.log('Minimum Age:', minAge);
console.log('Maximum Age:', maxAge);

if(ages.length % 2 === 1){
    const middleIndex = Math.floor(ages.length / 2)
    const medianAge = ages[middleIndex]
    console.log('Median Age:', medianAge);
}else{
    const middleIndex1 = ages.length / 2 -1
    const middleIndex2 = ages.length / 2
    const medianAge = (ages[middleIndex1] + ages[middleIndex2]) / 2
    console.log('Meadian Age: ', medianAge);
}

const ageTotal = ages.reduce((acc, curval)=> (acc + curval),0)
const numOfTime = ages.length
const averAge = ageTotal / numOfTime
console.log('Average Age: ',averAge);

const range = maxAge - minAge
console.log("Range of Age: ",range);

const countryNameLengths = countries.map(country => country.length)
const averageLength = countryNameLengths.reduce((total, length)=> total + length,0) / countryNameLengths.length

const minDifference = Math.abs(countryNameLengths.reduce((min, length)=> Math.min(min, length - averageLength), Infinity))

const maxDifference = Math.abs(countryNameLengths.reduce((min, length)=> Math.min(min, length - averageLength), -Infinity))

console.log('Minimum Difference (abs(min - average)):', minDifference);
console.log('Maximum Difference (abs(max - average)):', maxDifference);


const firstTenCountries = countries.slice(0, 10);
console.log('First Ten Countries:', firstTenCountries);


const middleIndex = Math.floor(countries.length / 2);

if (countries.length % 2 === 0) {
  const middleCountries = [countries[middleIndex - 1], countries[middleIndex]];
  console.log('Middle Countries:', middleCountries);
} else {
  const middleCountry = countries[middleIndex];
  console.log('Middle Country:', middleCountry);
}


let firstHalf, secondHalf;

if (countries.length % 2 === 0) {
  const middleIndex = countries.length / 2;
  firstHalf = countries.slice(0, middleIndex);
  secondHalf = countries.slice(middleIndex);
} else {
  const middleIndex = Math.floor(countries.length / 2);
  firstHalf = countries.slice(0, middleIndex + 1);
  secondHalf = countries.slice(middleIndex + 1);
}

console.log('First Half:', firstHalf);
console.log('Second Half:', secondHalf);