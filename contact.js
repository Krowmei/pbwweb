document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // mencegah submit default

    const email = document.getElementById("email").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const message = document.getElementById("message").value.trim();
    const terms = document.getElementById("terms").checked;

    if (!email || !firstName || !lastName || !message) {
        alert("Semua field wajib diisi!");
        return;
    }

    if (!terms) {
        alert("Anda harus menyetujui syarat dan ketentuan.");
        return;
    }

    alert("Form berhasil dikirim!");
    });

document.querySelector("form").reset();

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("page-transition");
});

window.addEventListener("beforeunload", function () {
    document.body.style.opacity = "0";
});


