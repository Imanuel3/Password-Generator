// Assignment Code
let upperCase= "ABCDEFGHIKJLMNOPQRSTUVWXYZ"

let lowerCase= "abcdefghijklmnopqrstuvwxyz"

let numbers="1234567890"

let sym= "!@#$%^&*()_-+=`~;:>.<,/?/*-"

// Assignment Code
let  generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  while (password == ""){
    alert("Nothing was chosen, Please try again!")
    password = generatePassword() 
  }

  passwordText.value = password;

}

// Added a event listener to the button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
let pwd = Number(prompt("How long do you wish your password to be? (8-128)"))

while(pwd < 8 || pwd > 128 ){
  alert("Please enter a password between 8 to 128 characters")
  pwd = Number(prompt("How long do you wish your password to be? (8-128)"))
}

// shows you what you need for your password
let upr = confirm("You will need uppercase letters?")
let lwr = confirm("You will need lowercase letters?")
let spc = confirm("You will needsymbols?")
let num = confirm("You will neednumbers?")
let charPool = ""
let password = ""



if  (upr) {
  charPool += upperCase
}
if  (lwr) {
  charPool += lowerCase
}
if  (spc) {
  charPool += sym
}
if  (num) {
  charPool += numbers
}

// making the charPool string randome//

for (let i = 0; i < pwd; i++) {
 
  let y = Math.floor(Math.random() * charPool.length)
  password += charPool.charAt(y)
}

return password



}


  

 


