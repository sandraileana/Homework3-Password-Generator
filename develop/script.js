// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "";
var lowercase = "";
var uppercase = "";
var number = "";
var specialcharacter = "";
var options = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    var passwordText = document.querySelector("#password"); 
    passwordText.value = password; 
}

function generatePassword(){
  do {
      characters = prompt ("Enter the number of characters (from 8-128) that you would like for your password", "");
        if (characters <=128 && characters >= 8) {
          alert("Your number " + characters + " matches requirements", "");
          lowercase = confirm ("Do you want to include lowercase letters?");
          uppercase = confirm ("Do you want to include uppercase letters?");
          number = confirm ("Do you want to include numbers?");
          specialcharacter = confirm ("Do you want to include special characters?");
        } else if (isNaN(characters)){
          alert (characters + " is not a number.", "");
        } else {
          alert ("Your number " + characters + " is not from 8 and 128.", "");
        }
 } while (isNaN(characters) || characters >128 || characters <8);
 
  if (lowercase != true && uppercase != true && number != true && specialcharacter != true){
    alert("Please select at least one type of character.");
  } 

    const randomFunc = {
      lowercaseF: getRandomLowercase,
      uppercaseF: getRandomUppercase,
      numberF: getRandomNumber,
      specialcharacterF: getRandomSpecialcharacter,
    };
    
    function createPassword (lowercaseF, uppercaseF, numberF, specialcharacterF, length) {
      let createPassword = "";
      const typeCount = lowercaseF + uppercaseF + numberF + specialcharacterF;
      const typeArr = [{
        lowercaseF
      },{
        uppercaseF
      },{
        numberF
      },{
        specialcharacterF
      }].filter(item => Object.values(item)[0]);

      for (let i = 0; i < length; i += typeCount){
        typeArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          createPassword += randomFunc [funcNme]();
        });
    }

    const password = createPassword.slice (0, length);

    return password;

  }

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


// Generation of random values with Javascript

function getRandomLowercase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUppercase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSpecialcharacter(){
  var specialcharacter = "¡!¿?()[]{}<>|/@#$%&=+*-_,.";
  return symbol[Math.floor(Math.random()*symbol.length)];
}