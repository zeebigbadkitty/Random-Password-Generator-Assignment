
var characters= [] ///"!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"/



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var passwordLength = parseInt(prompt("Enter password length?"))
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    return "Please enter a valid number."
  }
  var upperCaseinput = confirm("Do you want uppercase characters?")
  var lowerCaseinput = confirm("Lower case characters?")
  var specialCharactersinput = confirm("Include special characters?")
  var numbersInput = confirm("Include numbers?")
  
  if (!upperCaseinput && !lowerCaseinput && !specialCharactersinput && !numbersInput)
  { return "Please make a selection of characters you would like to include in your password."
}
var password = ''
var userInput = [] 
if(upperCaseinput) userInput.push(['A','B','C','D','E','F','G','H', 'I', 'J', 'K', 'L', 'M', 'N','O','P','Q','R','S','T','V','W','X','Y','Z'])
if(lowerCaseinput) userInput.push(['a','b','c'])
if (specialCharactersinput) userInput.push(['!','@','#'])
if (numbersInput) userInput.push(['0','1'])
console.log(userInput)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// 
//GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//(How many characters?)(Special Characters?)(Capital Letters?)(Lower case?)(Numbers?)
//"!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"/
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page//