
var characters= [] 
var generateBtn = document.querySelector("#generate");

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
if(upperCaseinput) 
    userInput = userInput.concat(['A','B','C','D','E','F','G','H', 'I', 'J', 'K', 'L', 'M', 'N','O','P','Q','R','S','T','V','W','X','Y','Z'])
if (lowerCaseinput)
    userInput = userInput.concat(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])
if (specialCharactersinput) 
   userInput = userInput.concat(['!','@','#','$','%','^','&','*','(',')','*','+',',','-',"'",".",',','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~',])
if (numbersInput) 
    userInput = userInput.concat(['0','1','2','3','4','5','6','7','8','9'])
for (i=0; i<passwordLength; i++){
  var rowIndex = Math.floor(Math.random()*userInput.length)
  password += userInput[rowIndex]
}
console.log(password)
return password
}
generateBtn.addEventListener("click", writePassword);



