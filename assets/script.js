// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

var characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code))
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());


var generatePassword = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase) =>{
  var availableCharacters = [
    ...(hasSymbols ? symbols : []),
    ...(hasNumbers ? numbers : []),
    ...(hasUppercase ? symbols : []),
    ...(hasLowercase ? symbols : [])
  ];
  let password = "";

  if (availableCharacters.length === 0) return ""

  for(i = 0; i <length; i++){
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }

  return password;
}
console.log(generatePassword(9, true, true, true, true));

// Write password to the #password input
function writePassword() {
  var password = generatePassword(9, true, true, true, true);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
