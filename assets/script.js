/*
// Assignment Code


var countPassword = window.prompt("How long do you wish the password to be? Note: Must be between 8 - 128");
console.log("User wants password to have" + countPassword + " charcters");

var userChoiceNUM = window.prompt("Would you like numaric? (Y or N)");
var userChoiceLET = window.prompt("Would you like letters? (Y or N)");
var userChoiceSYM = window.prompt("Would you like symbols? (Y or N)");
var userChoiceCAP = window.prompt("Would you like capital letters? (Y or N)");

//console.log(userChoice); 
var collection = {
    // Properties are made up of key-value pairs
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    letters: ["a", "b" ,"c", "d" , "e" , "f" , "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    symbols: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",],
    CAPS: ["A", "B" ,"C", "D" , "E" , "F" , "G", "H", "I", "J", "K"]
  }; // CAPS has to made to act as a seperation to letters

  
  // To access a property's value that is a string, number or boolean, use the object's name and the associated key	


// random must be deadicated to each charcter array or it will roll over larger than the array and be undefined
var randomNUM = Math.floor(Math.random() * collection.numbers.length);
var randomLET = Math.floor(Math.random() * collection.letters.length);
var randomSYM = Math.floor(Math.random() * collection.symbols.length);
var randomCAP = Math.floor(Math.random() * collection.CAPS.length);


console.log(collection.numbers[randomNUM]);
console.log(collection.letters[randomLET]);
console.log(collection.symbols[randomSYM]);
console.log(collection.CAPS[randomCAP]);

//var computerChoice = collection[]

var projectNUM = 0;
var password = [];

console.log(userChoiceNUM);
console.log(userChoiceLET);

if ( 8 <= countPassword <= 128 ){

for (i =0; i < countPassword; i++){
*/


 // for (i =0; i < countPassword; i++){

function generatePassword (){


var countPassword = window.prompt("How long do you wish the password to be? Note: Must be between 8 - 128");
console.log("User wants password to have" + countPassword + " charcters");

var userChoiceNUM = window.confirm("Would you like numaric? If so click okay");
var userChoiceLET = window.prompt("Would you like letters? (Y or N)");
var userChoiceSYM = window.prompt("Would you like symbols? (Y or N)");
var userChoiceCAP = window.prompt("Would you like capital letters? (Y or N)");

//console.log(userChoice); 
var collection = {
    // Properties are made up of key-value pairs
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    letters: ["a", "b" ,"c", "d" , "e" , "f" , "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    symbols: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",],
    CAPS: ["A", "B" ,"C", "D" , "E" , "F" , "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]
  }; // CAPS has to made to act as a seperation to letters

  
  // To access a property's value that is a string, number or boolean, use the object's name and the associated key	


// random must be deadicated to each charcter array or it will roll over larger than the array and be undefined
var randomNUM = Math.floor(Math.random() * collection.numbers.length);
var randomLET = Math.floor(Math.random() * collection.letters.length);
var randomSYM = Math.floor(Math.random() * collection.symbols.length);
var randomCAP = Math.floor(Math.random() * collection.CAPS.length);

//

console.log(collection.numbers[randomNUM]);
console.log(collection.letters[randomLET]);
console.log(collection.symbols[randomSYM]);
console.log(collection.CAPS[randomCAP]);

//var computerChoice = collection[]

var password = "";

if ( 8 <= countPassword && countPassword <= 128 ){

  for (i =0; i < countPassword; i++){
    var random = Math.floor(Math.random() * collection.numbers.length);
    console.log(random)
if (userChoiceNUM){
  password += collection.numbers[random];
  console.log("Added numbers");
 //will have numbers
} else {
  console.log("No added numbers");
 //will not have numbers
}

  }

return password;

  

if (userChoiceLET === "Y" || "y" || "yes"){
  password.push(collection.letters[randomLET]);
  console.log("Added letters");
  //will have letters
} else if (userChoiceLET === "N" || "n" || "no"){
  console.log("No added letters");
 //will not have letters
}

  

if (userChoiceSYM === "Y" || "y" || "yes"){
  password.push(collection.symbols[randomSYM]);
  console.log("Added symbols");
  //will have symbols
} else if (userChoiceSYM === "N" || "n" || "no"){
  console.log("No added symbols");
 //will not have symbols
}

  }

  for (i =0; i < countPassword; i++){

if (userChoiceCAP === "Y" || "y" || "yes"){
  password.push(collection.CAPS[randomCAP]);
  console.log("Added capitals letters");
  //will have capiatal letters
} else if (userChoiceCAP === "N" || "n" || "no"){
  console.log("No added capitals letters");
 //will not have capitals letters
}

  }

return password;

  }








var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









//--------------------------------------------------------------------------
/*
console.log(collection.numbers[random]);
console.log(collection.letters[random]);
console.log(collection.symbols[random]);

//var a = collection.numbers[random];
//var b = collection.letters[random];
//var c = collection.symbols[random];

//console.log(a, b, c);
  
//var collection = {
    // Properties are made up of key-value pairs
    //numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    //letters: ["a", "b" ,"c", "d" , "e" , "f" , "g", "h", "i", "j", "k"],
    //symbols: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",],
    //CAPS: ["A", "B" ,"C", "D" , "E" , "F" , "G", "H", "I", "J", "K"]
  }; // CAPS has to made to act as a seperation to letters

//var input = 8; // this will be based on user input for password length
//var generatePassword = document.{

//}



function make(){

var genPassword = "";

var x = randomNUM;
var y = randomLET;
var z = randomSYM;
var CapsY = randomCAP;


var random = Math.floor(Math.random() * input);

function randomNUM (){ 
return collection.numbers[random];
}
function randomLET (){ 
return collection.letters[random];
}
function randomSYM (){ 
return collection.symbols[random];
}
function randomCAP (){
return collection.CAPS[random];
}

console.log(x, y, z, CapsY);

};

//if (genPassword.length = input){
//  genPassword [i]
//  genPassword.push(Characters);
//  } else {
//    console.log(genPassword);
//  }
//}

//for (var i = 0; i < studentNames.length;i++ ){
//  console.log("Welcome to the class" + studentNames[i])
//}


//var random = Math.floor(Math.random() * input);

//var genPassword = [];
//var input = 10; // this will be based on user input for how long the password is

//for (i = 0; i < input; i++) {
//  genPassword.push(x);
//  genPassword.push(y);
 // genPassword.push(z);
//  if (genPassword.length === input){
 //   console.log(genPassword);
 // } else {
//    console.log(Error);
//  }
//}





 


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page