const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const texts = [
    "We Love Programming!",
    "Front End Web Developer!",
    "Omar hmar!!!",
];
let i = 0;
let j = 0;
let speed = 300 / speedEl.value;
let cont = false;

writeTexts(texts);

async function wait(speed) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, speed);
    });
}

async function writeTexts(texts) {
    for (let text of texts) {
        for (let [i, letter] of Object.entries(text)) {
            if (cont) {
                cont = false;
                continue;
            }
            speed = 300 / speedEl.value;
            console.log(textEl.innerText);

            if (letter === " ") {
                textEl.setAttribute("data-end", " " + text[Number(i) + 1]);
                await wait(250);
                textEl.textContent =
                    textEl.textContent + " " + text[Number(i) + 1];
                textEl.setAttribute("data-end", "");
                cont = true;
                await wait(speed);
            } else {
                textEl.setAttribute("data-end", letter);
                await wait(250);
                text[Number(i) + 1] &&
                    textEl.setAttribute("data-end", text[Number(i) + 1]);
                textEl.textContent += text[i];
                textEl.setAttribute("data-end", "");
                cont = false;
                await wait(speed);
            }
        }
        for (let [i, letter] of Object.entries(text)) {
            textEl.setAttribute("data-end", "");
            if (cont) {
                cont = false;
                continue;
            }
            speed = 300 / speedEl.value;
            console.log(textEl.innerText);
            if (textEl.textContent.at(-1) === " ") {
                textEl.textContent = textEl.textContent.slice(0, -2);
                cont = true;
                await wait(speed);
            } else {
                textEl.textContent = textEl.textContent.slice(0, -1);
                cont = false;
                await wait(speed);
            }
        }
        j++;
    }
    j = 0;
    writeTexts(texts);
}
