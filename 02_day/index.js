console.log('Day 2: Exercises');

const challenge = '30 Day Of JavaScript'
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
const firstWord =challenge.substring(0, 2) //substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log( firstWord ); //30
const sliceOut = challenge.slice(firstWord.length,    challenge.length)
console.log(sliceOut);
const includeScript = challenge.includes('Script')
console.log(includeScript);
const splitToarr = challenge.split(" ")
console.log(splitToarr);
const company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(company.split(", "));

const replaceJs = challenge.replace('JavaScript' ,'Python')
console.log(replaceJs);
console.log(challenge);

const index15 = challenge.charAt(15)
console.log(index15);

const codeOfJ = challenge.charCodeAt(11)
console.log(codeOfJ);

const firstOfA = challenge.indexOf('a')
console.log(firstOfA);

const sentence = 'You cannot end a sentence with because because because is a conjunction'

const firstBecause = sentence.indexOf("because")
console.log(firstBecause);

const lastBecause = sentence.lastIndexOf("because")
console.log(lastBecause);

console.log(sentence.search("because"));

const challenge2 =  ' 30 Days Of JavaScript '
console.log(challenge2.trim());

console.log(challenge.startsWith("30"));

console.log(challenge.endsWith('Script'))

console.log(challenge.match(/a/gi));

const str1 = '30 Day Of'
const str2 = ' javaScript'
console.log(str1.concat(str2));

console.log(challenge.repeat(2));

// Exercise: Level 2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);


console.log(typeof '10' === typeof 10 );
console.log(typeof +'10' === typeof 10 );

const exp1 = parseFloat('9.8')
const exp2 = 10

console.log(Math.ceil(exp1) === exp2);

const strPy = 'python'
const strJa = 'jargon'

const findOn = strJa.includes("on") && strPy.indexOf("on") !== -1

console.log(findOn);


const sentence_1 = 'I hope this course is not full of jargon'

console.log(sentence_1.indexOf("jargon") !== -1);

const random1 = Math.floor((Math.random() * 100) + 1)
console.log(random1);

const min = 50
const max = 100

const randomLimt = Math.floor((Math.random()* (max - min + 1)) + min)
console.log(randomLimt);

const random2 = Math.floor((Math.random() * 255) + 1)
console.log(random2);


const str3 = 'JavaScript'
let index = Math.floor(Math.random() * str3.length)
console.log(str3[index]);

console.log(' 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125');



// const firstIndex = sentence.indexOf('because')
// const lastIndex = sentence.indexOf('because', firstIndex + 1) + "because".length

// console.log(sentence);
// console.log(sentence.substr(firstIndex, lastIndex - firstIndex));

// const sentence = 'You cannot end a sentence with because because because is a conjunction';

// Find the starting index of the first occurrence of 'because'
const startIndex = sentence.indexOf('because');

// Find the ending index of the third occurrence of 'because'
const endIndex = sentence.indexOf('because', startIndex + 1) + 'because'.length;

// Use substr to extract the desired phrase
const extractedPhrase = sentence.substr(startIndex, endIndex - startIndex);

console.log(extractedPhrase); // 'because because because'
let pattn = /because/gi
console.log(sentence.match(pattn).length);

const love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattar = /love/gi
console.log(love.match(pattar).length)

const sentence_2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanText = sentence_2
.replace(/[^a-zA-Z\s]/g, '')
.replace(/\s+/g, ' ')
.trim()

console.log(cleanText);

const word = cleanText.split(" ")
console.log(word);

const wordFrequency = {}
word.forEach((word)=>{
    word = word.toLowerCase()
    if(wordFrequency[word]){
        wordFrequency[word]++
    }else{
        wordFrequency[word] = 1
    }
})

let mostFrequentWord = ''
let maxFrequency = 0

for (const word in wordFrequency) {
    if(wordFrequency[word] > maxFrequency){
        mostFrequentWord = word;
        maxFrequency = wordFrequency[word]
    }
}

console.log(`Cleaned Text: ${cleanText}`);
console.log(`Most Frequent Word: "${mostFrequentWord}" (Frequency: ${maxFrequency})`);


const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const numbers = text.match(/\d+/g)
console.log(numbers);
let totalAnnualIncome = 0;

if(numbers){
    numbers.forEach(number=>{
        return totalAnnualIncome += parseInt(number, 10)
    })
}
console.log(`Total Annual Income: ${totalAnnualIncome} euro`);