// Welcome Message
window.onload = function () {
    console.log("Welcome to Monika's Student Portfolio!");
};

// Dark Mode Function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Contact Form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been submitted.");
        form.reset();
    });
}