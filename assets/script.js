
// Assignment Code


var collection = {
    // Properties are made up of key-value pairs
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    letters: ["a", "b" ,"c", "d" , "e" , "f" , "g", "h", "i", "j", "k"],
    symbols: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",]

  };

  
  // To access a property's value that is a string, number or boolean, use the object's name and the associated key	
  console.log(collection.letters[6]);
  console.log(collection.symbols[13]);

// credit to YouTuber cdcode for demonstration when Math.random method was not working URL: https://www.youtube.com/watch?v=1Rq_LrpcgIM&ab_channel=dcode
var random = Math.floor(Math.random() * 10);

console.log(random);
 
console.log(collection.numbers[random]);
console.log(collection.letters[random]);
console.log(collection.symbols[random]);



var random = Math.floor(Math.random() * 10);
var x = collection.numbers[random];
var y = collection.letters[random];
var z = collection.symbols[random];

var CapsY = collection.letters[random];


var random = Math.floor(Math.random() * 10);

var genPassword = [];
var input = 10; // this will be based on user input for how long the password is

for (i = 0; i < input; i++) {
  genPassword.push(x);
  genPassword.push(y);
  genPassword.push(z);
  if (genPassword.length === input){
    console.log(genPassword);
  } else {
    console.log(Error);
  }
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