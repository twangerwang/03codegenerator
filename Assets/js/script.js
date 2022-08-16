// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
 
  // Takes in a password length and check to see if it matches the length criteria
  var pwLength = window.prompt("Length of password, 8 - 128 characters.");
    while ((pwLength < 8) || (pwLength > 128)) {
      pwLength = window.prompt("Please enter a length between 8 - 128 characters for the password again.");
    }

// Sets the 4 individual types of characters to be used in the password
  let lowerCasePool = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperCasePool = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
  let numericPool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let specCharPool = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '~'];

// initializes the final pool which the password will pick from
  var totalPool = [];
  
// next 4 vars selects which subpool to add to the final pool. The while loop exits when at least one subpool is chosen. 
while (totalPool.length==0) {
  var lowerCase = window.confirm("Click OK to include lowercase letters");
  if (lowerCase) {
    totalPool = totalPool.concat(lowerCasePool);
  } 
  var upperCase = window.confirm("Click OK to include UPPERCASE letters");
  if (upperCase) {
    totalPool = totalPool.concat(upperCasePool);
  }
  var numeric = window.confirm("Click OK to include numerics");
  if (numeric) {
    totalPool = totalPool.concat(numericPool);
  } 
  var specChar = window.confirm("Click OK to include special characters");
  if (specChar) {
    totalPool = totalPool.concat(specCharPool);
  } 
}
  // ititializes the password string then runs a while loop for the length of the password
  var pw = [];
  while (pwLength > 0) {
    pw = pw + totalPool[Math.floor(Math.random() * totalPool.length)];
    pwLength--;
  }
  
 return pw;
 
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
