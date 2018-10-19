

var submit = document.querySelector(`#submit`);
var email = document.querySelector(`#email`);
var password = document.querySelector(`#password`);
var confirmPassword = document.querySelector(`#confirmPassword`);
var p1 = document.querySelector(`#first`);
var p2 = document.querySelector(`#second`);
var p3 = document.querySelector(`#third`);

submit.addEventListener("submit", function(e){
  var re = /\S+@\S+/;
  if (!re.test(email.value)) {
    console.log("*Email jo i rregullt. Duhet te jete i formatit pippo@tn.al*");
    document.getElementById(`first`).innerHTML="*Email jo i rregullt. Duhet te jete i formatit pippo@tn.al*";
  }
  if(password.value.length<8){
    console.log("*Passwordi nuk ka gjatesine e duhur*");
    document.getElementById(`second`).innerHTML="*Passwordi nuk ka gjatesine e duhur*";
  }
  if(confirmPassword.value!==password.value){
    console.log("*Vlerat ne fushen 2 dhe 3 nuk perputhen*");
    document.getElementById(`third`).innerHTML="*Vlerat ne fushen 2 dhe 3 nuk perputhen*";
  }
});
