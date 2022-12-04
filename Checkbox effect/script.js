const toggles = document.querySelectorAll(".toggle");

let last;

toggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
        toggle.checked = toggle.checked == true ? true : false;
        if ([...toggles].every((toggle) => toggle.checked)) {
            last.checked = false;
        }
        last = toggle;
    });
});
