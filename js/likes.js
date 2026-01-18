const likesContainer = document.getElementById("likesContainer");

// favourites id lar
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

/* Render favourites */
function renderLikes() {
    if (favourites.length === 0) {
        likesContainer.innerHTML = `
            <p>Sevimli mahsulotlar yo‘q 😕</p>
            <a href="products.html" class="btn">Mahsulotlarga o‘tish</a>
        `;
        return;
    }

    likesContainer.innerHTML = "";

    const favProducts = products.filter(p =>
        favourites.includes(p.id)
    );

    favProducts.forEach(p => {
        likesContainer.innerHTML += `
            <div class="product-card">
                <a href="product.html?id=${p.id}">
                    <img src="${p.img_url}" alt="${p.name}">
                    <h3>${p.name}</h3>
                </a>

                <p class="price">${p.price.toLocaleString()} so'm</p>

                <div style="display:flex; gap:10px; margin-top:10px">
                    <button class="btn" onclick="addToCart(${p.id})">
                        Savatga qo‘shish
                    </button>

                    <button class="btn-like" onclick="removeLike(${p.id})">
                        ❤️
                    </button>
                </div>
            </div>
        `;
    });
}

/* Remove from favourites */
function removeLike(id) {
    favourites = favourites.filter(f => f !== id);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    renderLikes();
}

/* Add to cart */
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);

    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Mahsulot savatga qo‘shildi 🛒");
}

/* INIT */
renderLikes();
