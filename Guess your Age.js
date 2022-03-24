function guessAge() {
  function input(text){
      return prompt(text);
    }
  var date = new Date();
  var birthyear = parseInt(input(`What is your birthyear, the year you were born?`));
  var passedBirthday = input(`Did you already have your birthday?`);
  if(passedBirthday == `yes`){
    passedBirthday = 0;
  } else if(passedBirthday == `no`) {
    passedBirthday = 1;
  }
  return `Your age is ${date.getFullYear() - birthyear - passedBirthday}.`
}
