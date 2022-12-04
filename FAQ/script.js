const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) =>
    faq.addEventListener("click", function (e) {
        faq.classList.toggle("active");
    })
);
