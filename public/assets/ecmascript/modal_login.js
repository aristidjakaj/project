var anchor_login= document.querySelector(`#login_modal`);
var x_login=document.querySelector(`#x_login`);
var target_login=document.querySelector(`#modal_login`);

anchor_login.addEventListener(`click`, function(e){
  target_login.style.display="block";
  target_login.style.paddingRight="17px";
  target_login.style.background="rgba(0,0,0,0.6)";
  setTimeout(function(){
    target_login.classList.add(`show`);
    target_login.style.opacity="1";
    target_login.setAttribute("aria-hidden", "false");
  }, 100);
});

x_login.addEventListener(`click`, function(e){
  var x=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    x.classList.remove(`show`);
    x.style.transition="opacity 0.30s linear 0s";
    x.style.opacity="0";
  setTimeout(function(){
    x.style.transition="background 0.15s linear 0s";
    x.style.background="rgba(0,0,0,0)";
  }, 300);
  setTimeout(function(){
    x.style.display="none";
    x.style.paddingRight="0";
    x.setAttribute(`aria-hidden`, "true");
  }, 600);
});
