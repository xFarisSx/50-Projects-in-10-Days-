const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideI = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
slideRight.style.top = `-${activeSlideI * 100}vh`;

function update() {
    slideRight.style.top = `-${activeSlideI * 100}vh`;
    slideLeft.style.top = `-${(slidesLength - 1 - activeSlideI) * 100}vh`;
}

upButton.addEventListener("click", moveUp);
function moveUp() {
    if (activeSlideI === slidesLength - 1) return;
    activeSlideI++;
    update();
}
downButton.addEventListener("click", moveDown);
function moveDown() {
    if (activeSlideI === 0) return;
    activeSlideI--;
    update();
}
