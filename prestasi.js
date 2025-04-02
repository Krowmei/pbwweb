document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("page-transition");
});

window.addEventListener("beforeunload", function () {
    document.body.style.opacity = "0";
});