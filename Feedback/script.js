const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

panel.addEventListener("click", function (e) {
    if (e.target.closest(".rating")?.classList.contains("rating")) {
        ratings.forEach((rating) => rating.classList.remove("active"));
        e.target.closest(".rating").classList.add("active");
        selectedRating = e.target
            .closest(".rating")
            .querySelector("small").textContent;
    }
});

sendBtn.addEventListener("click", function (e) {
    panel.innerHTML = `
		<i class='fas fa-heart'></i>
		<strong>Thank You!</strong>
		<br/>
		<strong>Feedback: ${selectedRating}</strong>
		<p>We will use your feedback to improve our support</p>	
	`;
});
