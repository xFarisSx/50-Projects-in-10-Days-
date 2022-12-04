const container = document.querySelector(".container");

const url = `https://source.unsplash.com/random/`;
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${url}${randomNr()}x${randomNr()}`;
    container.appendChild(img);
}

function randomNr() {
    return Math.floor(Math.random() * rows) + 300;
}
