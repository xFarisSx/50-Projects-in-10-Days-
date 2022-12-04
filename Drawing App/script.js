const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const decreaseEl = document.getElementById("decrease");
const increaseEl = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const clearEl = document.getElementById("clear");
const colorEl = document.getElementById("color");
const penEl = document.getElementById("pen");

let size = 20;
let isPressed = false;
let color = "black";
let x;
let y;
let type;

penEl.addEventListener("change", function () {
    type = penEl.value;
});

decreaseEl.addEventListener("click", () => {
    if (size === 5) return;
    size -= 5;
    sizeEl.textContent = size;
});
increaseEl.addEventListener("click", () => {
    if (size === 50) return;
    size += 5;
    sizeEl.textContent = size;
});

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorEl.addEventListener("change", () => {
    color = colorEl.value;
});

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = type === "eraser" ? "white" : color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = type === "eraser" ? "white" : color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
