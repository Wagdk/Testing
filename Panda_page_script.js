document.addEventListener("DOMContentLoaded", function () {
    const cookieBox = document.getElementById("cookie-box");
    const acceptBtn = document.getElementById("accept-cookies");
    const denyBtn = document.getElementById("afvis-cookies");

    // Sikkerhedscheck
    if (!cookieBox || !acceptBtn || !denyBtn) return;

    // Tjek om der allerede er taget stilling
    const accepted = localStorage.getItem("cookiesAccepted");
    cookieBox.style.display = "block"; // Vis boksen

    // Accepter cookies
    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBox.style.display = "none";
    });

    // Afvis cookies
    denyBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "false");
        cookieBox.style.display = "none";
    });
});
