// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordLengthInput = window.prompt(
    "How long would you like your password to be?"
  );

  // Possible characters
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var lowercaseLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // converts string lowercaseLetter to uppercase
  var uppercaseLetter = lowercaseLetter.map(function (letter) {
    return letter.toUpperCase();
  });

  // Password length needs to be number
  // parseInt() parses it's argument and returns as an integer
  var passwordLength = parseInt(passwordLengthInput) || 0;
  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Passwords must be between 8 and 128 characters");
  }

  // Password requirements for the user
  //window.confirm () opens yes or no dialog and returns true/false depending on user click
  var useLowercase = window.confirm("Would you like to use lowercase letters?");
  var useUppercase = window.confirm("Would you like to use uppercase letters?");
  var useNumbers = window.confirm("Would you like to use numbers?");
  var useSpecialChars = window.confirm(
    "Would you like to use special characters?"
  );
  if (!useLowercase && !useUppercase && !useNumbers && !useSpecialChars) {
    return alert("Passwords must use one type of character");
  }

  // Variables to store characters selected, and to store the final password its self. if characters selected concat (joined) to the array
  var myChars = [];
  var password = [];
  if (useLowercase) myChars = myChars.concat(lowercaseLetter);
  if (useUppercase) myChars = myChars.concat(uppercaseLetter);
  if (useNumbers) myChars = myChars.concat(numbers);
  if (useSpecialChars) myChars = myChars.concat(specialChars);
  shuffle(myChars);

  // Looping until password length requirement is met
  for (var i = 1; i <= passwordLength; i++) {
    // add random character from possible characters to password
    var randomNumber = Math.floor(Math.random() * myChars.length);
    password.push(myChars[randomNumber]);
  }
  return password.join("");
}

// stack overflow --
// Shuffle function
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // added <for> loop to generate random

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
