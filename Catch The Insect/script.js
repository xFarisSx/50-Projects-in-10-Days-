const screens = document.querySelectorAll(".screen");
const btns = document.querySelectorAll(".choose-insect-btn");
const startBtn = document.getElementById("start-btn");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const msgEl = document.getElementById("msg");
const gameContainer = document.querySelector(".game-container");

let seconds = 0;
let score = 0;
let selectedInsect = {};
let timeout = setTimeout(() => {}, 100);

startBtn.addEventListener("click", () => screens[0].classList.add("up"));

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        const src = img.getAttribute("src");
        selectedInsect = { src };
        screens[1].classList.add("up");
        setTimeout(createInsect, 1000);
        startGame();
        // addInsects();
    });
});

function createInsect() {
    const insect = document.createElement("div");
    insect.classList.add("insect");
    const { x, y } = getRandomPos();
    insect.style.top = y + "px";
    insect.style.left = x + "px";
    insect.innerHTML = `<img style="transform:rotate(${
        Math.random() * 360
    }deg);" src="${selectedInsect.src}"></img>`;
    gameContainer.appendChild(insect);

    insect.addEventListener("click", catchInsect);
}

function catchInsect(e) {
    increaseScore();
    e.target.closest(".insect").classList.add("caught");
    setTimeout(() => this.remove(), 2000);
    addInsects(1);
}

function addInsects(num) {
    // clearTimeout(timeout);
    timeout = setTimeout(() => {
        createInsect();
    }, 1000 / num);
}

function increaseScore() {
    score++;
    // if (score > 19) msgEl.classList.add("visible");
    scoreEl.textContent = `Score: ${score}`;
}

function startGame() {
    setInterval(() => {
        increaseTime();
    }, 1000);
}
function increaseTime() {
    seconds++;
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML = `Time: ${m}:${s}`;
    addInsects(seconds / 100);
}

function getRandomPos() {
    let x = Math.trunc(Math.random() * (window.innerWidth - 200)) + 100;
    let y = Math.trunc(Math.random() * (window.innerHeight - 200)) + 100;
    return { x, y };
}
