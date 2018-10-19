var collapse = document.querySelector(`a.nav-link.search`);
var shown=false;

collapse.addEventListener('click', function(e){
  var anchor = document.querySelector(`a.nav-link.search`);
  if(!shown){
    anchor.classList.remove(`collapsed`);
    anchor.setAttribute("aria-expanded", "true");
    anchor.parentElement.parentElement.nextElementSibling.style.height="60px";
    setTimeout(function(){
      anchor.parentElement.parentElement.nextElementSibling.classList.remove(`collapsing`);
      anchor.parentElement.parentElement.nextElementSibling.classList.add(`collapse`);
      anchor.parentElement.parentElement.nextElementSibling.classList.add(`show`);
    }, 500);

    shown=true;
  }
  else{
    anchor.classList.add(`collapsed`);
    anchor.setAttribute("aria-expanded","true");
    anchor.parentElement.parentElement.nextElementSibling.classList.remove(`collapse`);
    anchor.parentElement.parentElement.nextElementSibling.classList.remove(`show`);
    anchor.parentElement.parentElement.nextElementSibling.classList.add(`collapsing`);
    anchor.parentElement.parentElement.nextElementSibling.style.height="0";
    shown=false;
  }
});
