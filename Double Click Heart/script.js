const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let time1 = new Date().getTime();
let can = true;

loveMe.addEventListener("click", (e) => {
    let time2 = new Date().getTime();
    if (time2 - time1 < 250 && can) {
        can = false;
        time1 = time2;
        console.log(time1);

        times.textContent = +times.textContent + 1;

        const pos = [
            e.clientX - loveMe.offsetLeft,
            e.clientY - loveMe.offsetTop,
        ];

        const heart = document.createElement("i");
        heart.className = "fas fa-heart";
        heart.style.top = `${pos[1]}px`;
        heart.style.left = `${pos[0]}px`;
        loveMe.appendChild(heart);
    } else {
        can = new Date().getTime() - time1 < 300 ? false : true;
        time1 = time2;
    }
});
