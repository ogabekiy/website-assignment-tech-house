const form = document.getElementById("checkoutForm");

form.addEventListener("submit", e => {
    e.preventDefault();

    // Savatni tozalash
    localStorage.removeItem("cart");

    alert("Buyurtma muvaffaqiyatli qabul qilindi 🎉");

    // Home page’ga qaytish
    window.location.href = "index.html";
});
