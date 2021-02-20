// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables to be used in password generator sequence

var special = [' !#$%&"()*+,-./:;<=>?@[]^_`{|}~'];
var numbers = ["1234567890"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYX"];
var userCriteria = [""];

//Click button (event-type) to start prompts (event handler)
generateBtn.addEventListener("click", genPswd);
// DISPLAY length-criteria prompt for user input
function genPswd() {
  var userLength = window.prompt(
    "Please enter a number  between 8 - 128 for the length of your password:"
  );
  // IF condition 8 - 128 FALSE (using operators and logic)
  if (!(userLength >= 8) && userLength <= 128) {
    // THEN DISPLAY alert  "number must be between 8 - 128"
    window.alert("Number chosen MUST be between 8 and 128.");
    // ELSE condition 8 - 128 is TRUE (using operators and logic)
  } else {
    //DISPLAY character-type confirmations
    special = window.confirm("Do you want to include special characters?");
    numbers = window.confirm("Do you want to include numbers?");
    lowerCase = window.confirm("Do you want to include lower-case characters?");
    upperCase = window.confirm("Do you want to include upper-case characters?");
  }
}
// LOOP FOR each possible combination
// none ==> ALERT  "Must choose at least one character-type criteria.""
// all ==>
// special
// number
// lowercase
// uppercase
// special + number
// special + lowercase
// special + uppercase
// special + number + lowercase
// special + number + uppercase
// special + lowercase + uppercase
// number + lowercase
// number + uppercase
// number + lowercase + uppercase
// lowercase + uppercase

// VALIDATE user selections "Are these criteria correct?"
// IF condition FALSE (cancel button clicked)
// THEN output "Oops, start again." in "Your Secure Password"
// ELSE condition TRUE (ok button clicked)
// THEN return  password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// END
