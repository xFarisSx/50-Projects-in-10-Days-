const cont = document.querySelector(".container");
const right = document.querySelector(".right");
const left = document.querySelector(".left");

left.addEventListener("mouseenter", function (e) {
    // cont.classList.add(`hover-${e.target}`);
    cont.classList.add("hover-left");
    cont.classList.remove("hover-right");
});
right.addEventListener("mouseenter", function (e) {
    // cont.classList.add(`hover-${e.target}`);
    cont.classList.add("hover-right");
    cont.classList.remove("hover-left");
});
