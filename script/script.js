
// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordLength = prompt (
    "Choise your password length"
);

if (passwordLength <8 || passwordlength > 128 || jason.parse(passwordLength)){
alert("You must select a number between 8 and 128.");
console.log("This does not meet the criteria");
// return "try again.";
}else {
    console.log(passwordLength);
}
var letterTypes = [];

var lowerCase = confirm("Would you like to get lowercase letters ?");
alert("")
if (lowerCase === true) {
    letterTypes.push(0);
}
console.log(lowerCase);

var upperCase = confirm("Would you like to get Uppercase letters ?");
if (upperCase === true) {
    letterTypes.push(1);
}
console.log(upperCase);

var number = confirm("would you like to include a number ?");
if (number === true) {
letterTypes.push(2);
}
console.log(number);

var special = confirm("Would ou like to include a special character ?")
if (special === true) {
letterTypes.push(3);
}
console.log(special);

console.log(lettertypes);

var thePassword = "";

for (var i = 0; i < passwordLength; ++i) {
    var randomLetterType =
    letterTypes[Math.floor(Math.random() * letterTypes.length)];
    console.log(randomLetterTypes);
}

if (randomLetterType === 0) {
    console.log("Random lowercase");
} else if (randomletterType === 1) {
    console.log("random upperCase");
}else if (randomLetterType === 2) {
    console.log("Random Number");
}else if (randomLetterType === 3) {
    console.log("Random Special");
}
else {
    alert("You must selecta type");
    console.log("No type selected");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);