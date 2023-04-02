// Assignment code here
// Constants defined for the total of characters to be used in password generation
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIKLKMNOPQRSTUVWXYZ";
const numericCharacters = "0123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//generatePassword function to be used by the provided code
function generatePassword() {
  //prompt for the password lenght, and verification if the input is valid
  let passwordLength = parseInt(prompt("Enter a password length of at least 8 characters and no more than 128 characters: ", "12"));
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Wrong input, please enter a password length of at least 8 characters and no more than 128 characters:", "12"))
  }
  //Variables containing the prompt as confirm function
  //I decided to use the confirm function instead of the prompt function to avoid invalid inputs 
  let lowerCase = confirm("Include lowercase?");
  let upperCase = confirm("Include uppercase?");
  let numeric = confirm("Include numeric values?");
  let special = confirm("Include special characters?");

  //this section confirms that there was input provided by the user
  if(!(lowerCase && upperCase && numeric && special)){
    alert("Please select at least one character type");
    return "";
  }

  //adds together all the character types selected by the user
  let charactersSelected ="";
  if (lowerCase) {
    charactersSelected += lowerCaseLetters
  }
  if (upperCase) {
    charactersSelected += upperCaseLetters
  }
  if (numeric) {
    charactersSelected += numericCharacters
  }
  if (special) {
    charactersSelected += specialCharacters
  }

  //adds together random characters based on the selection
  let password = "";
  for (let i=0; i < passwordLength; i++) {
    let random = Math.floor(Math.random() * charactersSelected.length);
    password += charactersSelected[random]
  }

  //return the final function output
  return password
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
