let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");

let currentSlide = 0;

document.getElementById("button--right").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

document.getElementById("button--left").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
  if (moveTo >= slides.length) moveTo = 0;
  if (moveTo < 0) moveTo = slides.length - 1;

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");

  currentSlide = moveTo;
}

document.querySelectorAll(".slider__navlink").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});

document.body.onkeydown = function (e) {  
	if (e.keyCode == 32) {
		changeSlide(currentSlide + 1);	//swipe right with space
	}
	if(e.keyCode == 39) {
    changeSlide(currentSlide + 1); //swipe right with arrow right
  }
	if (e.keyCode == 37) {
    changeSlide(currentSlide - 1);	//swipe left with arrow left
  } 
}

