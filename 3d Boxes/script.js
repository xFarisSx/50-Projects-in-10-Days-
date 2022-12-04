const btn = document.getElementById("btn");
const boxes = document.getElementById("boxes");

const createBoxes = function () {
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.backgroundPosition = `${x * -125}px ${y * -125}px`;
            boxes.appendChild(box);
        }
    }
};

createBoxes();

btn.addEventListener("click", function () {
    boxes.classList.toggle("big");
});
