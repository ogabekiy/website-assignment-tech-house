const cartContainer = document.getElementById("cartContainer");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <p>Savat bo‘sh 😕</p>
            <a href="products.html" class="btn">Mahsulotlarga o‘tish</a>
        `;
        return;
    }

    let total = 0;

    cartContainer.innerHTML = cart.map(item => {
        total += item.price * item.qty;

        return `
            <div class="cart-item">
                <img src="${item.img_url}">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.price.toLocaleString()} so'm</p>

                    <div class="qty">
                        <button onclick="changeQty(${item.id}, -1)">−</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${item.id}, 1)">+</button>
                    </div>

                    <button onclick="removeItem(${item.id})">❌ O‘chirish</button>
                </div>
            </div>
        `;
    }).join("") + `
        <h2>Jami: ${total.toLocaleString()} so'm</h2>
        <a href="checkout.html" class="btn">Buyurtma berish</a>
    `;
}

function changeQty(id, amount) {
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.qty += amount;
    if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function removeItem(id) {
    cart = cart.filter(p => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();
