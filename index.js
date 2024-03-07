// Extract the last four characters from the string below ,"extravaganza"
let a = 'extravaganza';
console.log({character: a[8]})
console.log({character: a[9]})
console.log({character: a[10]})
console.log({character: a[11]})


// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const food ="The quick fox jumped over the lazy dog";
const insertString = " eat ";
const modifyFood = food.substring(0,4) +insertString + food.substring(4);
console.log(modifyFood);


// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story="The quick brown fox jumps over the lazy dog"
const countThe =(story.match(/the/gi)||[]).length;
const countBrown =(story.match(/brown/gi)||[]).length;
console.log("Number of repeating  of 'the':", countThe);
console.log("Number of repeating  of 'brown':", countBrown);

// Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 ="The pupils are reading in the library";
const findword = "are";
const located = string1.includes(findword);
console.log("is 'are' located?", located)

const string2 ="The child was sitting on the table before it fell"
const findstatement = "sitting"
const found = string2.includes(findstatement);
console.log("is 'sitting' found?", found);
 
// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let word= "Wonderful";
 word1 = "amazing"
let result = word.toUpperCase();
 result1= word1.toLowerCase();
console.log(result)
console.log(result1)