// Declare variables in global scope

var special = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "| " ,"}", "~"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var userCriteria;
var userLength;
var yesSpec;
var yesNum;
var yesLo;
var yesUp;
var userPassword = [];

var generateBtn = document.querySelector("#generate");

//Click button (event-type) to start prompts (event handler)
generateBtn.addEventListener("click", genPswd);
// DISPLAY length-criteria prompt for user input
function genPswd() {
  userLength = parseInt(window.prompt("Please enter a number  between 8 - 128 for the length of your password:"));
      // IF condition 8 - 128 FALSE (no entry)
  if (!userLength) {
      // THEN DISPLAY alert "requires input"
      parseInt(window.alert("Your input was empty, this criteria is required!"));
  // IF condition 8 - 128 FALSE (outside parameters)
  } else if (!(userLength >= 8 && userLength <= 128)) {
    // THEN DISPLAY alert  "number must be between 8 - 128"
    parseInt(window.alert("Number chosen MUST be between 8 and 128."));
    // ELSE condition 8 - 128 is TRUE (using operators and logic)
  } else {
    //DISPLAY character-type confirmations
    yesSpec = window.confirm("Do you want to include special characters?");
    yesNum = window.confirm("Do you want to include numbers?");
    yesLo = window.confirm("Do you want to include lower-case characters?");
    yesUp = window.confirm("Do you want to include upper-case characters?");
  };

  // CONDITIONAL functions

  // 4 character-types: use concat for results
  if (yesSpec && yesNum && yesLo && yesUp) {
    userCriteria = special.concat(numbers, lowerCase, upperCase);
  }
  // 3 character-types
  // special + number + lo
  else if (yesSpec && yesNum && yesLo) {
    userCriteria = special.concat(numbers, lowerCase);
  }
  // special + number + up
  else if (yesSpec && yesNum && yesUp) {
    userCriteria = special.concat(numbers, upperCase);
  }
  // number + lo + up
  else if (yesNum && yesLo && yesUp) {
    userCriteria = numbers.concat(lowerCase, upperCase);
  }
  // 2 character-types
  // special + number
  else if (yesSpec && yesNum) {
    userCriteria = special.concat(numbers);
  }
  // special + lo
  else if (yesSpec && yesLo) {
    userCriteria = special.concat(lowerCase);
  }
  // special + up
  else if (yesSpec && yesUp) {
    userCriteria = special.concat(upperCase);
  }
  // number + lo
  else if (yesNum && yesLo) {
    userCriteria = numbers.concat(lowerCase);
  }
  // number + up
  else if (yesNum && yesUp) {
    userCriteria = numbers.concat(upperCase);
  }
  // lo + up
  else if (yesLo && yesUp) {
    userCriteria = lowerCase.concat(upperCase);
  }
  // 1 character-type
  // special only
  else if (yesSpec) {
    userCriteria = special;
  }
  // number only
  else if (yesNum) {
    userCriteria = numbers;
  }
  // lowercase only
  else if (yesLo) {
    userCriteria = lowercase;
  }
  // uppercase only
  else if (yesUp) {
    userCriteria = uppercase;
  }
  // none ==> ALERT  "Must choose at least one character-type criteria.""
  else if (!yesSpec && !yesNum && !yesLo && !yesUp) {
    userCriteria = window.alert("You MUST choose at least one character-type.");
  };

  // Random selection for user chosen variables

  for (var i = 0; i < userLength; i++) {
    var randomArr = userCriteria[Math.floor(Math.random() * userCriteria.length)];
    userPassword.push(randomArr);
  }
  
  var e = userPassword.join("");
  inputPassword(e);
  return e;
}
// INPUTS password to textarea
function inputPassword(e) {
    document.getElementById("password").textContent = e;
}

// END
