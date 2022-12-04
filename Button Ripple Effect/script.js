const buttons = document.querySelectorAll(".ripple");

buttons.forEach((btn) => {
    btn.addEventListener("mousedown", (e) => {
        const [x, y] = [e.target.offsetLeft, e.target.offsetTop];
        const pos = [e.clientX - x, e.clientY - y];
        console.log(pos);

        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = pos[1] + "px";
        circle.style.left = pos[0] + "px";
        btn.appendChild(circle);

        // circle.style.top = btn.insertAdjacentHTML(
        //     "beforeend",
        //     `<span class:'circle' style="top: ${pos[1]}px; left:${pos[0]}px;"></span>`
        // );
        setTimeout(() => {
            btn.removeChild(circle);
        }, 450);
    });
});
