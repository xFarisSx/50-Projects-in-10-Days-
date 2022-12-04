const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = Array.from(document.querySelectorAll(".circle"));
let actives = Array.from(document.querySelectorAll(".active"));

let currentActive = 1;

next.addEventListener("click", function () {
    currentActive++;

    if (currentActive > circles.length) currentActive = circles.length;

    update();
});
prev.addEventListener("click", function () {
    currentActive--;

    if (currentActive < 1) currentActive = 1;
    update();
});
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
    if (currentActive === 1) prev.disabled = true;
    else if (currentActive === circles.length) next.disabled = true;
    else {
        next.disabled = false;
        prev.disabled = false;
    }
    actives = document.querySelectorAll(".active");
    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
