let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");

let interval = 5000;
let currentSlide = 0;
let keyStorage = "currentSlideKey";

function setStorageItem(key, value) {
  localStorage.setItem(key, value);
}

//Check storage to contain value for slide
(function checkStorage() {
  if (localStorage.getItem(keyStorage) === undefined) {
    localStorage.setItem(keyStorage, 0);
  }
  if (localStorage.getItem(keyStorage) !== undefined) {
    changeSlide(Number(localStorage.getItem(keyStorage)));
  }
})();

document.getElementById("button--right").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

document.getElementById("button--left").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

// the main function of removable content
function changeSlide(moveTo) {
  if (moveTo >= slides.length) moveTo = 0;
  if (moveTo < 0) moveTo = slides.length - 1;

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");

  currentSlide = moveTo;
  setStorageItem(keyStorage, currentSlide);
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
    changeSlide(currentSlide + 1); //swipe right with space
  }
  if (e.keyCode == 39) {
    changeSlide(currentSlide + 1); //swipe right with arrow right
  }
  if (e.keyCode == 37) {
    changeSlide(currentSlide - 1); //swipe left with arrow left
  }
};

setInterval(() => {
  changeSlide(currentSlide + 1);
}, interval);
