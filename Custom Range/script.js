const range = document.getElementById("range");

range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;
    label.innerHTML = value;

    label.style.left = `${
        (range.clientWidth * value) / 100 + ((value - 15) * -15) / 115
    }px`;
});
