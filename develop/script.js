// declaring variables to select for password
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var specialChar = "!@#$%&*+-";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//  if number is 8-128 save as var, run confirm criteria or alert  not in scope,  repeat
var passWordLength = prompt("Your password must be between 8-128 characters in length, enter a number in that range.");
if (passWordLength >= 8 && passWordLength <= 128) {
   var confirmLowCase = confirm("Do you want lowercase letters in your password?");
   var confirmUpperCase = confirm("Do you want uppercase letters in your password?");
   var confirmNums = confirm("Do you want numbers in your password?");
   var confirmSpecialChar = confirm("Do you want special characters letters in your password?");
   var characters = "";
   if (confirmLowCase ) {
    characters += lowCase;
   };
   if (confirmUpperCase ) {
      characters += upperCase;
   };
   if (confirmNums ) {
        characters += nums;
   };
   if (confirmSpecialChar ) {
     characters += specialChar;
   };
    if (!confirmLowCase &&  !confirmUpperCase && !confirmNums && !confirmSpecialChar) {
  alert("you select at least one type of character at minimum, try again");
  return "";  
  }
  return selectPassChar(passWordLength, characters);

  } else { 
  alert("That number is not 8-128, try again");
  };
}
// Generates random characters 
function selectPassChar (l, newCharacters) {
  var pwd = "";
  for (var i = 0; i < l; i++) {
    pwd +=  newCharacters.charAt(Math.floor(Math.random() * newCharacters.length));
  }
  return pwd;
}

 // Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
  }

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
