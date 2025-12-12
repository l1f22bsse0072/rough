// Fade-in effect on page load
window.addEventListener("load", () => {
    document.querySelector(".container").classList.add("show");
});

// Optional blinking animation for "404"
setInterval(() => {
    const title = document.querySelector("h1");
    title.style.opacity = (title.style.opacity === "0.6") ? "1" : "0.6";
}, 800);

// OPTIONAL: Auto-redirect after 5 seconds
// setTimeout(() => {
//     window.location.href = "/";
// }, 5000);
