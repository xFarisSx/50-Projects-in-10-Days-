const next = document.getElementById("right");
const prev = document.getElementById("left");
const imagesContainer = document.getElementById("imgs");
const imgs = document.querySelectorAll("img");

let i = 0;
let latest;

next.addEventListener("click", goNext);

function goNext() {
    if (i === imgs.length - 1) {
        i = 0;
        update();
        return;
    }
    i++;

    update();
}
prev.addEventListener("click", goPrev);

function goPrev() {
    if (i === 0) {
        i = imgs.length - 1;
        update();
        return;
    }
    i--;

    update();
}

function update() {
    latest = new Date().getTime();
    imagesContainer.style.transform = `translateX(-${i * imgs[0].width}px)`;
}

function autoNext() {
    setInterval(() => {
        if (new Date().getTime() - latest < 2000) {
            return;
        }
        goNext();
    }, 2000);
}
autoNext();
