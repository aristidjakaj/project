var firstTab=document.querySelector(`#newArrival-tab`);
var secondTab=document.querySelector(`#bestSellers-tab`);
var thirdTab=document.querySelector(`#mostWanted-tab`);
var firstContent=document.querySelector(`#newArrival`);
var secondContent=document.querySelector(`#bestSellers`);
var thirdContent=document.querySelector(`#mostWanted`);

firstTab.addEventListener(`click`, function(e){
  if(!(firstTab.getAttribute(`class`).includes(`active`))){
    if(secondTab.getAttribute(`class`).includes(`active`)){
      secondTab.classList.remove(`active`);
      secondTab.classList.remove(`show`);
      secondTab.setAttribute("aria-selectd", "false");
      setTimeout(function(){
        secondContent.classList.remove(`active`);
        secondContent.classList.remove(`show`);
      }, 100);
    }
    if(thirdTab.getAttribute(`class`).includes(`active`)){
      thirdTab.classList.remove(`active`);
      thirdTab.classList.remove(`show`);
      thirdTab.setAttribute("aria-selectd", "false");
      setTimeout(function(){
        thirdContent.classList.remove(`active`);
        thirdContent.classList.remove(`show`);
      }, 100);
    }
    firstTab.classList.add(`active`);
    firstTab.classList.add(`show`);
    firstTab.setAttribute("aria-selectd", "true");
    setTimeout(function(){
      firstContent.classList.add(`active`);
      firstContent.classList.add(`show`);
    }, 100);
  }
});

secondTab.addEventListener(`click`, function(e){
  if(!(secondTab.getAttribute(`class`).includes(`active`))){
    if(firstTab.getAttribute(`class`).includes(`active`)){
      firstTab.classList.remove(`active`);
      firstTab.classList.remove(`show`);
      firstTab.setAttribute("aria-selectd", "false");
      setTimeout(function(){
        firstContent.classList.remove(`active`);
        firstContent.classList.remove(`show`);
      }, 100);
    }
    if(thirdTab.getAttribute(`class`).includes(`active`)){
      thirdTab.classList.remove(`active`);
      thirdTab.classList.remove(`show`);
      thirdTab.setAttribute("aria-selected", "false");
      setTimeout(function(){
        thirdContent.classList.remove(`active`);
        thirdContent.classList.remove(`show`);
      }, 100);
    }
    secondTab.classList.add(`active`);
    secondTab.classList.add(`show`);
    secondTab.setAttribute("aria-selectd", "true");
    setTimeout(function(){
      secondContent.classList.add(`active`);
      secondContent.classList.add(`show`);
    }, 100);
  }
});

thirdTab.addEventListener(`click`, function(e){
  if(!(thirdTab.getAttribute(`class`).includes(`active`))){
    if(secondTab.getAttribute(`class`).includes(`active`)){
      secondTab.classList.remove(`active`);
      secondTab.classList.remove(`show`);
      secondTab.setAttribute("aria-selectd", "false");
      setTimeout(function(){
        secondContent.classList.remove(`active`);
        secondContent.classList.remove(`show`);
      }, 100);
    }
    if(firstTab.getAttribute(`class`).includes(`active`)){
      firstTab.classList.remove(`active`);
      firstTab.classList.remove(`show`);
      firstTab.setAttribute("aria-selectd", "false");
      setTimeout(function(){
        firstContent.classList.remove(`active`);
        firstContent.classList.remove(`show`);
      }, 100);
    }
    thirdTab.classList.add(`active`);
    thirdTab.classList.add(`show`);
    thirdTab.setAttribute("aria-selectd", "true");
    setTimeout(function(){
      thirdContent.classList.add(`active`);
      thirdContent.classList.add(`show`);
    }, 100);
  }
});
