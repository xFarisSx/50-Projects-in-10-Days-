const panels = Array.from(document.querySelectorAll(".panel"));
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
    const target = e.target;
    console.log(target);
    if (!target.classList.contains("panel")) return;
    panels.forEach((panel) => panel.classList.remove("active"));
    target.classList.add("active");
});
