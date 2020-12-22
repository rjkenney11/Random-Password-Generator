// Assignment Code
var generateBtn = document.querySelector("#generate");

var userPswd = "";

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var spchar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var inclup = incllow = inclspc = inclnum = false;
var pswdlngth = 0;

function consoleInside(arr) {
    console.log("arr", arr);
    console.log("arr.length", arr.length);
    for (i = 0; i < arr.length; i++) {
        console.log("i: ", i);
        console.log(arr[i]);
    }
}

consoleInside(upper);
consoleInside(lower);
consoleInside(spchar);
consoleInside(number);
var pswdLength;
var selectup;
var selectlow;
var selectspec;
var selectnum;


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.textContent = password;
}

function promptanswers() {
    pswdLength = prompt("How many characters would you like your password to be? (Choose a number between 8-128)");
    if (pswdLength < 8 || pswdLength > 128) {
        alert("Invalid password length");
        return;
    }
    selectup = confirm("Would you like to include uppercase letters in your password?");
    selectlow = confirm("Would you like to include lowercase letters in your password?");
    selectspec = confirm("Would you like to include special characters in your password?");
    selectnum = confirm("Would you like to include numbers in your password?");
}

function generatePassword() {
    promptanswers();
    var possibleChar = [];

    if (selectup) {
        possibleChar = possibleChar.concat(upper);
    }
    if (selectlow) {
        possibleChar = possibleChar.concat(lower);
    }
    if (selectspec) {
        possibleChar = possibleChar.concat(spchar);
    }
    if (selectnum) {
        possibleChar = possibleChar.concat(number);
    }

    console.log(possibleChar);
    for (var i = 0; i < pswdLength; i++) {
        var index = Math.floor(Math.random() * possibleChar.length);
        console.log(index);
        var NewPswd = possibleChar[index];
        console.log(NewPswd);
        userPswd += NewPswd
        console.log(userPswd);

    }

    return userPswd
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);