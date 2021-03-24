# Homework3-Password-Generator

Password Generator

Initial view shows button to generate 

After that it send a series of prompts to determine
* Length of password (from 8 to 128 characters)
* If it should have lowercase, uppercase, number or symbols in it.

After this it should generate a password accomplishing the requierements determined by the user. 

References consulted

1. Interaction: alert, prompt, confirm. Retrieved from: https://javascript.info/alert-prompt-confirm

2. JavaScript do-while Loop. Retrieved from: https://www.javascripttutorial.net/javascript-do-while/

3. Javascript prompt number and continue prompting if answer is wrong. Retrieved from: https://stackoverflow.com/questions/15047140/javascript-prompt-number-and-continue-prompting-if-answer-is-wrong

4. Generating Random values with Javascript: https://webcache.googleusercontent.com/search?q=cache:VaqxCdATEwYJ:https://dev.to/olawanle_joel/password-generator-with-javascript-57c+&cd=7&hl=es-419&ct=clnk&gl=mx

5. element.addEventListener. Retreived from: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener

6. Starting a javascript prompt after a button is clicked. Retrieved from: https://stackoverflow.com/questions/37287093/starting-a-javascript-prompt-after-a-button-is-clicked

7. The HTML DOM Element Object. Retrieved from: https://www.w3schools.com/jsref/dom_obj_all.asp 



I WAS NOT POSSIBLE TO USE

    const result = document.querySelector("#password");
    result.value = generatePassword (characters, lowercase, uppercase, number, specialcharacter);




    generateBtn.addEventListener("submit", (e) => {
      e.preventDefault();
      const LengthCharacters = +characters.value;
      const hasLower = lowercase.true;
      const hasUpper = uppercase.true;
      const hasNumber = number.true;
      const hasSpecialcharacter = specialcharacter.true;
      const password = generatePassword (
        LengthCharacters,
        hasLower,
        hasUpper,
        hasNumber,
        hasSpecialcharacter,
      );
      passwordText.value = password;

    })
