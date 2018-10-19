var rightArrow = document.querySelector(`span.carousel-control-next-icon`);
var leftArrow = document.querySelector(`span.carousel-control-prev-icon`);
var indicator1=document.querySelector(`ol.carousel-indicators [data-slide-to="0"]`);
var indicator2=document.querySelector(`ol.carousel-indicators [data-slide-to="1"]`);
var indicator3=document.querySelector(`ol.carousel-indicators [data-slide-to="2"]`);
var firstView=document.querySelector(`div .carousel-inner .first`);
var secondView=document.querySelector(`div .carousel-inner .second`);
var thirdView=document.querySelector(`div .carousel-inner .third`);

rightArrow.addEventListener('click', function(e){
  var firstSlide=e.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
  var secondSlide=firstSlide.nextElementSibling;
  var thirdSlide=secondSlide.nextElementSibling;
  var firstIndicator=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild;
  var secondIndicator=firstIndicator.nextElementSibling;
  var thirdIndicator=secondIndicator.nextElementSibling;

  if(firstSlide.getAttribute(`class`).includes(`active`)){
    secondSlide.classList.add(`carousel-item-next`);
    firstIndicator.classList.remove(`active`);
    secondIndicator.classList.add(`active`);
    setTimeout(function(){
      firstSlide.classList.add(`carousel-item-left`);
      secondSlide.classList.add(`carousel-item-left`);
    }, 100);
    setTimeout(function(){
      firstSlide.classList.remove(`active`);
      firstSlide.classList.remove(`carousel-item-left`);
      secondSlide.classList.remove(`carousel-item-next`);
      secondSlide.classList.remove(`carousel-item-left`);
      secondSlide.classList.add(`active`);
    }, 700);
  }
  if(secondSlide.getAttribute(`class`).includes(`active`)){
    thirdSlide.classList.add(`carousel-item-next`);
    secondIndicator.classList.remove(`active`);
    thirdIndicator.classList.add(`active`);
    setTimeout(function(){
      secondSlide.classList.add(`carousel-item-left`);
      thirdSlide.classList.add(`carousel-item-left`);
    }, 100);
    setTimeout(function(){
      secondSlide.classList.remove(`active`);
      secondSlide.classList.remove(`carousel-item-left`);
      thirdSlide.classList.remove(`carousel-item-next`);
      thirdSlide.classList.remove(`carousel-item-left`);
      thirdSlide.classList.add(`active`);
    }, 700);
  }
  if(thirdSlide.getAttribute(`class`).includes(`active`)){
    firstSlide.classList.add(`carousel-item-next`);
    thirdIndicator.classList.remove(`active`);
    firstIndicator.classList.add(`active`);
    setTimeout(function(){
      thirdSlide.classList.add(`carousel-item-left`);
      firstSlide.classList.add(`carousel-item-left`);
    }, 100);
    setTimeout(function(){
      thirdSlide.classList.remove(`active`);
      thirdSlide.classList.remove(`carousel-item-left`);
      firstSlide.classList.remove(`carousel-item-next`);
      firstSlide.classList.remove(`carousel-item-left`);
      firstSlide.classList.add(`active`);
    }, 700);
  }
});

leftArrow.addEventListener(`click`, function(e){
  var firstSlide=e.target.parentElement.previousElementSibling.firstElementChild;
  var secondSlide=firstSlide.nextElementSibling;
  var thirdSlide=secondSlide.nextElementSibling;
  var firstIndicator=e.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
  var secondIndicator=firstIndicator.nextElementSibling;
  var thirdIndicator=secondIndicator.nextElementSibling;

  if(firstSlide.getAttribute(`class`).includes(`active`)){
    thirdSlide.classList.add(`carousel-item-prev`);
    firstIndicator.classList.remove(`active`);
    thirdIndicator.classList.add(`active`);
    setTimeout(function(){
      firstSlide.classList.add(`carousel-item-right`);
      thirdSlide.classList.add(`carousel-item-right`);
    }, 100);
    setTimeout(function(){
      firstSlide.classList.remove(`active`);
      firstSlide.classList.remove(`carousel-item-right`);
      thirdSlide.classList.remove(`carousel-item-prev`);
      thirdSlide.classList.remove(`carousel-item-right`);
      thirdSlide.classList.add(`active`);
    }, 700);
  }
  if(secondSlide.getAttribute(`class`).includes(`active`)){
    firstSlide.classList.add(`carousel-item-prev`);
    secondIndicator.classList.remove(`active`);
    firstIndicator.classList.add(`active`);
    setTimeout(function(){
      secondSlide.classList.add(`carousel-item-right`);
      firstSlide.classList.add(`carousel-item-right`);
    }, 100);
    setTimeout(function(){
      secondSlide.classList.remove(`active`);
      secondSlide.classList.remove(`carousel-item-right`);
      firstSlide.classList.remove(`carousel-item-prev`);
      firstSlide.classList.remove(`carousel-item-right`);
      firstSlide.classList.add(`active`);
    }, 700);
  }
  if(thirdSlide.getAttribute(`class`).includes(`active`)){
    secondSlide.classList.add(`carousel-item-prev`);
    thirdIndicator.classList.remove(`active`);
    secondIndicator.classList.add(`active`);
    setTimeout(function(){
      thirdSlide.classList.add(`carousel-item-right`);
      secondSlide.classList.add(`carousel-item-right`);
    },100);
    setTimeout(function(){
      thirdSlide.classList.remove(`active`);
      thirdSlide.classList.remove(`carousel-item-right`);
      secondSlide.classList.remove(`carousel-item-prev`);
      secondSlide.classList.remove(`carousel-item-right`);
      secondSlide.classList.add(`active`);
    }, 700);
  }
});

  indicator1.addEventListener(`click`, function(e){
    if(firstView.getAttribute(`class`).includes(`active`)===false){
      var firstIndicator=e.target;
      var secondIndicator=firstIndicator.nextElementSibling;
      var thirdIndicator=secondIndicator.nextElementSibling;
      var firstSlide=firstIndicator.parentElement.nextElementSibling.firstElementChild;
      var secondSlide=firstSlide.nextElementSibling;
      var thirdSlide=secondSlide.nextElementSibling;

      if(secondSlide.getAttribute(`class`).includes(`active`)){
        firstSlide.classList.add(`carousel-item-prev`);
        secondIndicator.classList.remove(`active`);
        firstIndicator.classList.add(`active`);
        setTimeout(function(){
          secondSlide.classList.add(`carousel-item-right`);
          firstSlide.classList.add(`carousel-item-right`);
        }, 100);
        setTimeout(function(){
          secondSlide.classList.remove(`active`);
          secondSlide.classList.remove(`carousel-item-right`);
          firstSlide.classList.remove(`carousel-item-prev`);
          firstSlide.classList.remove(`carousel-item-right`);
          firstSlide.classList.add(`active`);
        }, 700);
      }
      if(thirdSlide.getAttribute(`class`).includes(`active`)){
        firstSlide.classList.add(`carousel-item-prev`);
        thirdIndicator.classList.remove(`active`);
        firstIndicator.classList.add(`active`);
        setTimeout(function(){
          thirdSlide.classList.add(`carousel-item-right`);
          firstSlide.classList.add(`carousel-item-right`);
        }, 100);
        setTimeout(function(){
          thirdSlide.classList.remove(`active`);
          thirdSlide.classList.remove(`carousel-item-right`);
          firstSlide.classList.remove(`carousel-item-prev`);
          firstSlide.classList.remove(`carousel-item-right`);
          firstSlide.classList.add(`active`);
        }, 700);
      }
    }
  });

  indicator2.addEventListener(`click`, function(e){
    if(secondView.getAttribute(`class`).includes(`active`)===false){
      var firstIndicator=e.target.previousElementSibling;
      var secondIndicator=e.target;
      var thirdIndicator=secondIndicator.nextElementSibling;
      var firstSlide=firstIndicator.parentElement.nextElementSibling.firstElementChild;
      var secondSlide=firstSlide.nextElementSibling;
      var thirdSlide=secondSlide.nextElementSibling;

      if(firstSlide.getAttribute(`class`).includes(`active`)){
        secondSlide.classList.add(`carousel-item-next`);
        firstIndicator.classList.remove(`active`);
        secondIndicator.classList.add(`active`);
        setTimeout(function(){
          firstSlide.classList.add(`carousel-item-left`);
          secondSlide.classList.add(`carousel-item-left`);
        }, 100);
        setTimeout(function(){
          firstSlide.classList.remove(`active`);
          firstSlide.classList.remove(`carousel-item-left`);
          secondSlide.classList.remove(`carousel-item-next`);
          secondSlide.classList.remove(`carousel-item-left`);
          secondSlide.classList.add(`active`);
        }, 700);
      }
      if(thirdSlide.getAttribute(`class`).includes(`active`)){
        secondSlide.classList.add(`carousel-item-prev`);
        thirdIndicator.classList.remove(`active`);
        secondIndicator.classList.add(`active`);
        setTimeout(function(){
          thirdSlide.classList.add(`carousel-item-right`);
          secondSlide.classList.add(`carousel-item-right`);
        },100);
        setTimeout(function(){
          thirdSlide.classList.remove(`active`);
          thirdSlide.classList.remove(`carousel-item-right`);
          secondSlide.classList.remove(`carousel-item-prev`);
          secondSlide.classList.remove(`carousel-item-right`);
          secondSlide.classList.add(`active`);
        }, 700);
      }
    }
  });

  indicator3.addEventListener(`click`, function(e){
    if(thirdView.getAttribute(`class`).includes(`active`)===false){
      var firstIndicator=e.target.previousElementSibling.previousElementSibling;
      var secondIndicator=e.target.previousElementSibling;
      var thirdIndicator=e.target;
      var firstSlide=firstIndicator.parentElement.nextElementSibling.firstElementChild;
      var secondSlide=firstSlide.nextElementSibling;
      var thirdSlide=secondSlide.nextElementSibling;

      if(firstSlide.getAttribute(`class`).includes(`active`)){
        thirdSlide.classList.add(`carousel-item-next`);
        firstIndicator.classList.remove(`active`);
        thirdIndicator.classList.add(`active`);
        setTimeout(function(){
          firstSlide.classList.add(`carousel-item-left`);
          thirdSlide.classList.add(`carousel-item-left`);
        }, 100);
        setTimeout(function(){
          firstSlide.classList.remove(`active`);
          firstSlide.classList.remove(`carousel-item-left`);
          thirdSlide.classList.remove(`carousel-item-next`);
          thirdSlide.classList.remove(`carousel-item-left`);
          thirdSlide.classList.add(`active`);
        }, 700);
      }
      if(secondSlide.getAttribute(`class`).includes(`active`)){
        thirdSlide.classList.add(`carousel-item-next`);
        secondIndicator.classList.remove(`active`);
        thirdIndicator.classList.add(`active`);
        setTimeout(function(){
          secondSlide.classList.add(`carousel-item-left`);
          thirdSlide.classList.add(`carousel-item-left`);
        }, 100);
        setTimeout(function(){
          secondSlide.classList.remove(`active`);
          secondSlide.classList.remove(`carousel-item-left`);
          thirdSlide.classList.remove(`carousel-item-next`);
          thirdSlide.classList.remove(`carousel-item-left`);
          thirdSlide.classList.add(`active`);
        }, 700);
      }
    }
  });

  setInterval(function(){
    if(firstView.getAttribute(`class`).includes(`active`)){
      secondView.classList.add(`carousel-item-next`);
      indicator1.classList.remove(`active`);
      indicator2.classList.add(`active`);
      setTimeout(function(){
        firstView.classList.add(`carousel-item-left`);
        secondView.classList.add(`carousel-item-left`);
      }, 100);
      setTimeout(function(){
        firstView.classList.remove(`active`);
        firstView.classList.remove(`carousel-item-left`);
        secondView.classList.remove(`carousel-item-next`);
        secondView.classList.remove(`carousel-item-left`);
        secondView.classList.add(`active`);
      }, 700);
    }
    if(secondView.getAttribute(`class`).includes(`active`)){
      thirdView.classList.add(`carousel-item-next`);
      indicator2.classList.remove(`active`);
      indicator3.classList.add(`active`);
      setTimeout(function(){
        secondView.classList.add(`carousel-item-left`);
        thirdView.classList.add(`carousel-item-left`);
      }, 100);
      setTimeout(function(){
        secondView.classList.remove(`active`);
        secondView.classList.remove(`carousel-item-left`);
        thirdView.classList.remove(`carousel-item-next`);
        thirdView.classList.remove(`carousel-item-left`);
        thirdView.classList.add(`active`);
      }, 700);
    }
    if(thirdView.getAttribute(`class`).includes(`active`)){
      firstView.classList.add(`carousel-item-next`);
      indicator3.classList.remove(`active`);
      indicator1.classList.add(`active`);
      setTimeout(function(){
        thirdView.classList.add(`carousel-item-left`);
        firstView.classList.add(`carousel-item-left`);
      }, 100);
      setTimeout(function(){
        thirdView.classList.remove(`active`);
        thirdView.classList.remove(`carousel-item-left`);
        firstView.classList.remove(`carousel-item-next`);
        firstView.classList.remove(`carousel-item-left`);
        firstView.classList.add(`active`);
      }, 700);
    }
  }, 8000);
