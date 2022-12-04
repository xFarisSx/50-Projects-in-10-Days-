const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

toggle.addEventListener("click", function (e) {
    document.querySelector("html").classList.toggle("dark");
    const text = toggle.textContent;
    toggle.textContent = text === "Dark mode" ? "Light mode" : "Dark mode";
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minute = time.getMinutes();
    const seconds = time.getSeconds();

    hourEl.style.transform = `translate(-50%, -100%) rotate(${
        (360 * ((hours / 11.6) * 100)) / 100
    }deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${
        (360 * ((minute / 60) * 100)) / 100
    }deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${
        (360 * ((seconds / 60) * 100)) / 100
    }deg)`;

    timeEl.textContent = new Intl.DateTimeFormat(navigator.language, {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
    }).format(time);

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${day}</span>`;
}
setTime();
setInterval(setTime, 1000);
