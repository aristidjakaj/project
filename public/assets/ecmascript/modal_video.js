var anchor= document.querySelector(`button#modalButton`);
var x=document.querySelector(`#x_video`);
var close=document.querySelector(`#close_video`);
var target=anchor.nextElementSibling;

anchor.addEventListener(`click`, function(e){
  target.style.display="block";
  target.style.paddingRight="17px";
  target.style.background="rgba(0,0,0,0.6)";
  setTimeout(function(){
    target.classList.add(`show`);
    target.style.opacity="1";
    target.setAttribute("aria-hidden", "false");
  }, 100);
});

x.addEventListener(`click`, function(e){
  var x=e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
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

close.addEventListener(`click`, function(e){
  var close = e.target.parentElement.previousElementSibling.parentElement.parentElement.parentElement;
  close.classList.remove(`show`);
  close.style.transition="opacity 0.30s linear 0s"
  close.style.opacity="0";
setTimeout(function(){
  close.style.transition="background 0.15s linear 0s";
  close.style.background="rgba(0,0,0,0)";
}, 300);
setTimeout(function(){
  close.style.display="none";
  close.style.paddingRight="0";
  close.setAttribute(`aria-hidden`, "true");
}, 600);
});
