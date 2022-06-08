// Assignment Code
let generateBtn = document.querySelector("#generate");
//Generate password function
function generatePassword() {
  // Create arrays to pull values from
      let lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      let uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      let numberArray = ["1","2","3","4","5","6","7","8","9","0"];
      let specialArray = ["!","@","#","$","%","^","&","*","(",")"];
  // Set up aleart box pop ups for user to make selection
      let numCharacters = prompt ("How many character would you like in your password between 8 and 128?");
      let lowercase = confirm ("Do you want lowercase letters?");
      let uppercase = confirm ("Do you want UPPERCASE letters?");
      let number = confirm ("Do you want numbers?");
      let special = confirm ("Do you want special characters?");
  //Blank Arrays to store selected information
      let resultArray = [];
      let userInputArray = [];
  //If statements to determine what the user wished to have in password
      if (lowercase) {
          resultArray = resultArray.concat(lowercaseArray);
      }
        console.log(resultArray);
      if (uppercase) {
          resultArray = resultArray.concat(uppercaseArray);
      }
        console.log(resultArray);
      if (number) {
          resultArray = resultArray.concat(numberArray);
      }

      if (special) {
          resultArray = resultArray.concat(specialArray);
      }
  // Log selected choices
      console.log(resultArray)
  // For statement to randomize possible selections and create password
      for (var i = 0; i < numCharacters; i++) {
        userInputArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
      }
  // Combine selections into userInputArray for result
      return userInputArray.join("");
  };

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

