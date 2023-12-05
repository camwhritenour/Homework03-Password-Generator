//DOM Elements
var resultEL = document.getElementById('password');
var lengthEL = document.getElementById('length');
var uppercaseEL = document.getElementById('uppercase');
var lowercaseEL = document.getElementById('lowercase');
var numbersEL = document.getElementById('numbers');
var symbolsEL = document.getElementById('symbols');
var generateEL = document.getElementById('generate');
var clipboardEL = document.getElementById('clipboard');

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};



// Button Event
generateEL.addEventListener("click", () => {
  var length = +lengthEL.value;
  var hasLower = lowercaseEL.checked;
  var hasUpper = uppercaseEL.checked;
  var hasNumber = numbersEL.checked;
  var hasSymbol = symbolsEL.checked;

  resultEL.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

})

//Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
let generatedPassword = "";

const typesCount = lower + upper + number + symbol;

console.log("typesCount:", typesCount);

const typesArr = [{lower},{upper},{number},{symbol}].filter
(item => Object.values(item)[0]);

console.log("typesArr:", typesArr);

if(typesCount === 0) {
  return "";
}

for(let i = 0; i < length; i += typesCount) {
  typesArr.forEach(type =>{
    const funcName = Object.keys(type)[0];
    console.log("funcName: ", funcName)
    generatedPassword += randomFunc[funcName]();
  })
}
const finalPassword = generatedPassword.slice(0,length);

return finalPassword;
}

// Generator Functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

/* Assignment Code
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
*/