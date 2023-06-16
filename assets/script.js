

 // Generatepassword function has creating password section contained 

function generatePassword (){


var countPassword = window.prompt("How long do you wish the password to be? Note: Must be between 8 - 128");
console.log("User wants password to have" + countPassword + " charcters");

//Confirmation windows
var userChoiceNUM = window.confirm("Would you like numaric? If so click okay. If not, click cancel");
var userChoiceLET = window.confirm("Would you like letters? If so click okay. If not, click cancel");
var userChoiceSYM = window.confirm("Would you like symbols? If so click okay. If not, click cancel");
var userChoiceCAP = window.confirm("Would you like capital letters? If so click okay. If not, click cancel");


var collection = {
    // Properties are made up of key-value pairs
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    letters: ["a", "b" ,"c", "d" , "e" , "f" , "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    symbols: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",],
    CAPS: ["A", "B" ,"C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  }; // CAPS has to made to act as a seperate category to letters

  
  // To access a property's value that is a string, number or boolean, use the object's name and the associated key	


// Random must be deadicated to each charcter array or it will roll over larger than the array and be undefined
var randomNUM = Math.floor(Math.random() * collection.numbers.length);
var randomLET = Math.floor(Math.random() * collection.letters.length);
var randomSYM = Math.floor(Math.random() * collection.symbols.length);
var randomCAP = Math.floor(Math.random() * collection.CAPS.length);

// Below is a test to see if each random array is working 

console.log(collection.numbers[randomNUM]);
console.log(collection.letters[randomLET]);
console.log(collection.symbols[randomSYM]);
console.log(collection.CAPS[randomCAP]);

// var password is a String because Arrays leave commas between characters
var password = "";

// Number input by user must be between 8 AND 128 for password length
if ( 8 <= countPassword && countPassword <= 128 ){

  //the for loop is to continue until matching the length of a password 
  for (i =0; i < countPassword; i++){

    // Each random character variable needs to be redeclared as to be different each time

var randomNUM = Math.floor(Math.random() * collection.numbers.length);
console.log(randomNUM)

if (userChoiceNUM){ //+= adds to password String
  password += collection.numbers[randomNUM];
  console.log("Added numbers");
 //will have numbers
} else {
  console.log("No added numbers");
 //will not have numbers
}

var randomLET = Math.floor(Math.random() * collection.letters.length);
console.log(randomLET)

if (userChoiceLET){
  password += collection.letters[randomLET];
  console.log("Added letters");
  //will have letters
} else {
  console.log("No added letters");
 //will not have letters
}

var randomSYM = Math.floor(Math.random() * collection.symbols.length);
console.log(randomSYM)

if (userChoiceSYM){
  password += collection.symbols[randomSYM];
  console.log("Added symbols");
  //will have symbols
} else{
  console.log("No added symbols");
 //will not have symbols
}

var randomCAP = Math.floor(Math.random() * collection.CAPS.length);
console.log(randomCAP)

if (userChoiceCAP){
  password += collection.CAPS[randomCAP];
  console.log("Added capitals letters");
  //will have capiatal letters
} else {
  console.log("No added capitals letters");
 //will not have capitals letters
}

  }
  //Once the function is done it will return to beginning state
return password;

  } else {
    window.alert("The number provided either was not in range of 8 - 128 or not a number: Try Again");
  }

}

//The generateBtn variable will affect "#generate" ID

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //The value of password will be generatePassword function
  var password = generatePassword();
  //The pssword is finally printed onto the HTML page
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

