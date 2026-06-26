// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        // Check if the link href matches the current page URL
        if (currentUrl.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});