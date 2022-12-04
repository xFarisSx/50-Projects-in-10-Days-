const nav = document.querySelector("nav");
const imgs = document.querySelectorAll("img");

const goTo = function (target) {
    imgs.forEach((img) => img.classList.remove("show"));
    Array.from(nav.querySelector("ul").children).forEach((child) =>
        child.classList.remove("active")
    );

    [...imgs]
        .find(
            (img) =>
                img.alt ===
                target
                    .querySelector("p")
                    .textContent.toLowerCase()
                    .split(" ")[0]
        )
        .classList.add("show");
    target.classList.add("active");
};

nav.addEventListener("click", (e) => goTo(e.target.closest("li")));
