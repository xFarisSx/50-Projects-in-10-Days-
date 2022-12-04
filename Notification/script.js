const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
];

button.addEventListener("click", () => createNotification());

function createNotification() {
    const message = document.createElement("div");
    message.className = "toast";
    message.textContent = messages[Math.trunc(Math.random() * 4)];
    toasts.appendChild(message);
    [...toasts.children].forEach((message) => {
        const top = toasts.getBoundingClientRect().bottom;
        const topM = message.getBoundingClientRect().bottom;
        const heightM = message.getBoundingClientRect().height;
        console.log(topM, top);
        // console.log(topM, top);
        message.style.opacity = `${Math.abs(topM / top)}`;
        // message.style.opacity = `0.5`;
    });
    setTimeout(() => {
        message.classList.add("hide");
        setTimeout(() => toasts.removeChild(message), 600);
    }, 5000);
}
