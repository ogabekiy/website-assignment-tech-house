const productDetail = document.getElementById("productDetail");

// URL’dan id olish
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

// productni topish
const product = products.find(p => p.id === productId);

if (!product) {
    productDetail.innerHTML = "<p>Mahsulot topilmadi</p>";
} else {
    renderProduct(product);
}

/* Render */
function renderProduct(p) {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const liked = favourites.includes(p.id);

    productDetail.innerHTML = `
        <div>
            <img src="${p.img_url}" alt="${p.name}">
        </div>

        <div class="product-info">
            <h1>${p.name}</h1>
            <div>⭐ ${p.rating}</div>
            <div class="price">${p.price.toLocaleString()} so'm</div>
            <div class="stock">Omborda: ${p.stock} ta</div>

            <div class="product-actions">
                <button class="btn-cart" onclick="addToCart(${p.id})">
                    Savatga qo‘shish
                </button>

                <button class="btn-like" onclick="toggleLike(${p.id})">
                    ${liked ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
    `;
}

/* LIKE */
function toggleLike(id) {
    let fav = JSON.parse(localStorage.getItem("favourites")) || [];

    if (fav.includes(id)) {
        fav = fav.filter(i => i !== id);
    } else {
        fav.push(id);
    }

    localStorage.setItem("favourites", JSON.stringify(fav));
    renderProduct(product);
}

/* CART */
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = cart.find(p => p.id === id);

    if (item) {
        item.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Mahsulot savatga qo‘shildi ✅");
}
