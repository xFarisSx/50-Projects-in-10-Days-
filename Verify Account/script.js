const boxes = document.querySelectorAll("input");

boxes[0].focus();

let focus = 0;
boxes.forEach((box) => {
    box.addEventListener("keydown", (e) => update(e));
});

function update(e) {
    console.log(e);
    if (e.key === "Backspace" && !e.target.classList.contains("first")) {
        i = e.target
            .closest(".card")
            .previousElementSibling.querySelector("input");
        setTimeout(() => {
            activate();
            i.focus();
        }, 10);
    } else if (!e.target.classList.contains("last") && e.key !== "Backspace") {
        i = e.target.closest(".card").nextElementSibling.querySelector("input");
        setTimeout(() => {
            activate();
            i.focus();
        }, 10);
    }
    setTimeout(() => {
        activate();
    }, 10);
}

function activate() {
    boxes.forEach((box) => {
        if (box.value !== "") {
            box.closest(".q").classList.add("active");
        } else {
            box.closest(".q").classList.remove("active");
        }
    });
}
