const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if (!user) return;

    getUser(user);
    search.value = "";
});

async function getRepos(user) {
    try {
        const { data } = await axios(APIURL + user + "/repos?sort=created");

        addRepos(data);
    } catch (err) {
        createErrorCard("Problem fetching repos");
    }
}

function addRepos(repos) {
    const reposEl = document.getElementById("repos");

    repos.slice(0, 10).forEach((repo) => {
        const repoLink = document.createElement("a");
        repoLink.classList.add("repo");
        repoLink.setAttribute("href", repo.html_url);
        repoLink.target = "_blank";
        repoLink.textContent = repo.name;

        reposEl.appendChild(repoLink);
    });
}

function createUserCard(user) {
    const cardHTML = `
			<div class="card">
			<div>
				<img src="${user.avatar_url}" class="avatar" alt="${user.name}">
			</div>
			<div class="user-info">
				<h2>${user.name ?? user.login}</h2>
				<p>${user.bio ?? "There is no bio!"}</p>
				
				<ul>
					<li>${user.followers} <strong>Followers</strong></li>
					<li>${user.following} <strong>Followering</strong></li>
					<li>${user.public_repos} <strong>Repos</strong></li>
				</ul>
				
				<div id="repos">
				</div>
			</div>
		</div>
		`;

    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
		<div class="card">
			<h1>${msg}</h1>
		</div>
	`;

    main.innerHTML = cardHTML;
}

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);

        createUserCard(data);
        getRepos(username);
    } catch (err) {
        err.response.status == 404
            ? createErrorCard("No profile with this username")
            : "";
    }
}
