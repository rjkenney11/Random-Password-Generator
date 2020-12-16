// Assignment Code
var generateBtn = document.querySelector("#generate");

var userPswd; 

var upper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var spchar= ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
var number= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var inclup= incllow= inclspc= inclnum= false;
var pswdlngth= 0;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (){
    var user = prompt("How many characters would you like your password to be? (Choose a number between 8-128)");
        if (user < 8 || user > 128){
            alert("Invalid password length");
        while (inclup === false, incllow === false, inclspec === false, inclnum ===false);
        }
    var user = prompt("Would you like to include uppercase letters in your password?");
    var user = prompt("Would you like to include lowercase letters in your password?");
    var user = prompt("Would you like to include special characters in your password?");
    var user = prompt("Would you like to include numbers in your password?");



    return userPswd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
