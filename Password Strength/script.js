const password = document.getElementById("pass");
const background = document.querySelector(".background");
const strength = 8;

password.addEventListener("input", function (e) {
    const length = password.value.length;
    if (strength < length) return;
    console.log(length);

    background.style.filter = `blur(${
        20 - Math.trunc((length / strength) * 20)
    }px)`;
});
