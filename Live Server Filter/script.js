const resultsEl = document.getElementById("results");
const filter = document.querySelector(".filter");
const listItems = [];

const getData = async function () {
    const res = await fetch("https://randomuser.me/api?results=50");

    const { results } = await res.json();

    resultsEl.innerHTML = "";

    results.forEach((user) => {
        const li = document.createElement("li");
        listItems.push(li);
        li.innerHTML = `
		<img src="${user.picture.large}"></img>
		<div class="user-info">
		<h4>${user.name.first} ${user.name.last}</h4>
		<p>${user.location.city}, ${user.location.country}</p>
		</div>
		`;
        resultsEl.appendChild(li);
    });
};

getData();

filter.addEventListener("input", function (e) {
    let search = filter.value.toLowerCase();
    if (search === "" || search === " ") {
        listItems.forEach((el) => el.classList.remove("hide"));
        return;
    }

    listItems.forEach((el) => {
        const elName = el.querySelector("div").textContent.toLowerCase();
        let dahil;

        if (elName.includes(search)) {
            el.classList.remove("hide");
        } else {
            el.classList.add("hide");
        }

        // for (let i of search) {
        //     if (!elName.includes(i)) {
        //         dahil = false;
        //         el.classList.add("hide");
        //         return;
        //     }
        // }
        // el.classList.remove("hide");
    });
});
