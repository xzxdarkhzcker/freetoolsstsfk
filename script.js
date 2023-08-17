const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulated authentication
    if (usernameInput.value === "UNRESTLBNGN" && passwordInput.value === "UNRESTLBNGN") {
        window.location.href = "dashboard.html";
    } else {
        alert("ARE YOU DUMB?");
    }
});