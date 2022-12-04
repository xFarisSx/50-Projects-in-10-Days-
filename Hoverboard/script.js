const cont = document.querySelector(".container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARE = 500;

for (let i = 0; i < SQUARE; i++) {
    const square = document.createElement("div");
    square.className = "square";

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    cont.appendChild(square);
}

function setColor(el) {
    const color = colors[Math.trunc(Math.random() * (colors.length - 1))];
    el.style.backgroundColor = color;

    el.style.boxShadow = `0 0 2px ${color}`;
}
function removeColor(el) {
    el.style.backgroundColor = "#1d1d1d";
    el.style.boxShadow = "0 0 2px #000";
}
