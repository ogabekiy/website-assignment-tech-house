const form = document.getElementById("loginForm");
const message = document.getElementById("loginMessage");

// demo login
const DEMO_USER = "user";
const DEMO_PASS = "1111";

form.addEventListener("submit", e => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === DEMO_USER && password === DEMO_PASS) {
        localStorage.setItem("isLoggedIn", "true");

        message.style.color = "green";
        message.textContent = "✅ Muvaffaqiyatli tizimga kirildi";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1200);

    } else {
        message.style.color = "red";
        message.textContent = "❌ Login yoki parol noto‘g‘ri";
    }
});
