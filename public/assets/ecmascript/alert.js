let alert = document.querySelector(`#loginAlert`);
let xAlert = alert.firstElementChild.nextElementSibling.firstElementChild;

console.log(xAlert);

xAlert.addEventListener(`click`, function(e){
  alert.classList.remove(`show`);
  setTimeout(function(){
    alert.style.display = 'none';
  }, 300);
});
