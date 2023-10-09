console.log('💻 Day 5: Exercises');
//* 💻 Exercise
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


  const emptyArray = []

const arrayWithNum = [ 1, 2, 3, 4, 5]

const itCompanies = [ 'Facebook', 'Google' ,'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

 


function firstMiddleLast(array){
    const firstIndex = 0
    const middleIndex = parseInt(array.length / 2)
    const lastIndex = array.length - 1
    console.log(array);
    console.log(`LengthOfArray : ${array.length}`);
    console.log(`FirstIndexItem : ${array[firstIndex]}`);
    console.log(`MiddleIndexItem : ${array[middleIndex]}`);
    console.log(`LastIndexItem : ${array[lastIndex]}`);
 }
 

 firstMiddleLast(itCompanies)
 firstMiddleLast(arrayWithNum)

 itCompanies.forEach(item => console.log(item))

 const uppercaseName = itCompanies.toString().toUpperCase()

 console.log(uppercaseName);
 

function arrayTostring(array){
    if(array.length === 0){
        return ''
    }else if(array.length === 1){
        return array[0]
    }else{
        const lastIndex = array.pop()
        const sentence = array.join(', ') + ', and ' + lastIndex + " are big IT companies.";
        return sentence;
    }
}

console.log(arrayTostring(itCompanies));

const companyNameToCheck = "Tcs";
function toCheckCompani(companyName){
    if(itCompanies.includes(companyName)){
        return `${companyName} exists in the array.`
    }else{
        return `${companyName} is not found.`;
    }
} 

console.log(toCheckCompani(companyNameToCheck));

// const filteredCompanies =  itCompanies.filter((company)=>{
//     const oCount = (company.match(/o/gi) || []).length;
//     return oCount > 1;   
// })

// console.log(filteredCompanies);

console.log(itCompanies.sort())
console.log(itCompanies.reverse())


function filterCompaniesWithMultipupleOs(companies){
    const filteredCompanies = []

    for(let i = 0; i < companies.length; i++){
        const companyName = companies[i];
        let count = 0
        for(let j = 0; j < companyName.length; j++){
            if(companyName[j] === 'o' || companyName[j] === 'O'){
                count++
            }
            if(count > 1){
                break
            }
        }

        if(count > 1){
            filteredCompanies.push(companyName)
        }
    }
    return filteredCompanies
}

console.log(filterCompaniesWithMultipupleOs(itCompanies))