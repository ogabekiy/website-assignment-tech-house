const productsGrid = document.getElementById("productsGrid");
const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const priceMinInput = document.getElementById("priceMin");
const priceMaxInput = document.getElementById("priceMax");
const stockFilter = document.getElementById("stockFilter");
const sortSelect = document.getElementById("sortSelect");
const resetFiltersBtn = document.getElementById("resetFilters");

/* ===== URL'DAN PARAMETRLARNI O'QISH ===== */
const params = new URLSearchParams(window.location.search);
const urlCategory = params.get("category");
const urlSearch = params.get("search");

let activeCategory = urlCategory ? Number(urlCategory) : null;

if (urlSearch) {
    searchInput.value = urlSearch;
}

/* ===== RENDER CATEGORIES ===== */
function renderCategories() {
    categoryList.innerHTML = `
        <li onclick="selectCategory(null)" class="${activeCategory === null ? 'active' : ''}">
            Barchasi
        </li>
    `;

    categories.forEach(cat => {
        categoryList.innerHTML += `
            <li
                onclick="selectCategory(${cat.id})"
                class="${activeCategory === cat.id ? 'active' : ''}"
            >
                ${cat.name}
            </li>
        `;
    });
}
function generateStars(rate) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= Math.round(rate)
            ? `<i class="fa-solid fa-star"></i>`
            : `<i class="fa-regular fa-star"></i>`;
    }
    return stars;
}



/* ===== RENDER PRODUCTS ===== */
function renderProducts(list) {
    productsGrid.innerHTML = "";

    if (list.length === 0) {
        productsGrid.innerHTML = "<p class='no-products'>Mahsulot topilmadi</p>";
        return;
    }

    list.forEach(p => {
        const finalPrice = p.discount
            ? Math.round(p.price - (p.price * p.discount) / 100)
            : p.price;

        productsGrid.innerHTML += `
            <div class="product-card">
                
                ${p.discount ? `<span class="discount-badge">-${p.discount}%</span>` : ""}

                <a href="product.html?id=${p.id}" class="product-link">
                    <img src="${p.img_url}" alt="${p.name}">

                    <h3>${p.name}</h3>

                    <!-- ⭐ RATING -->
                    <div class="rating">
                        ${generateStars(p.rating)}
                        <span class="rate-num">${p.rating}</span>
                    </div>

                    <!-- 💸 PRICE -->
                    <div class="price-box">
                        ${
                            p.discount
                                ? `<span class="old-price">${p.price.toLocaleString()} so'm</span>
                                   <span class="new-price">${finalPrice.toLocaleString()} so'm</span>`
                                : `<span class="new-price">${p.price.toLocaleString()} so'm</span>`
                        }
                    </div>

                    <!-- 📦 STOCK -->
                    <p class="stock ${p.stock === 0 ? 'out-of-stock' : ''}">
                        ${p.stock === 0 ? 'Tugagan' : `Omborda: ${p.stock} ta`}
                    </p>
                </a>

                <button 
                    class="add-to-cart" 
                    onclick="addToCart(${p.id})"
                    ${p.stock === 0 ? 'disabled' : ''}
                >
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        `;
    });
}


/* ===== FILTER ===== */
function selectCategory(catId) {
    activeCategory = catId;
    applyFilters();
    renderCategories();
}

/* ===== APPLY FILTERS ===== */
function applyFilters() {
    let filtered = [...products];

    // 1️⃣ KATEGORIYA FILTER
    if (activeCategory !== null) {
        filtered = filtered.filter(p => p.categoryId === activeCategory);
    }

    // 2️⃣ QIDIRUV (SEARCH)
    const search = searchInput.value.toLowerCase().trim();
    if (search) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(search)
        );
    }

    // 3️⃣ NARX FILTER (MIN)
    const minPrice = priceMinInput ? Number(priceMinInput.value) : 0;
    if (minPrice > 0) {
        filtered = filtered.filter(p => p.price >= minPrice);
    }

    // 4️⃣ NARX FILTER (MAX)
    const maxPrice = priceMaxInput ? Number(priceMaxInput.value) : 0;
    if (maxPrice > 0) {
        filtered = filtered.filter(p => p.price <= maxPrice);
    }

    // 5️⃣ OMBORDA BOR/YO'Q FILTER
    if (stockFilter && stockFilter.value !== "all") {
        if (stockFilter.value === "available") {
            filtered = filtered.filter(p => p.stock > 0);
        } else if (stockFilter.value === "out") {
            filtered = filtered.filter(p => p.stock === 0);
        }
    }

    // 6️⃣ SARALASH (SORT)
    if (sortSelect && sortSelect.value !== "default") {
        if (sortSelect.value === "price-asc") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortSelect.value === "price-desc") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortSelect.value === "name-asc") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortSelect.value === "name-desc") {
            filtered.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortSelect.value === "stock-desc") {
            filtered.sort((a, b) => b.stock - a.stock);
        }
    }

    renderProducts(filtered);
    updateResultCount(filtered.length);
}

/* ===== NATIJALAR SONINI KO'RSATISH ===== */
function updateResultCount(count) {
    const resultCount = document.getElementById("resultCount");
    if (resultCount) {
        resultCount.textContent = `${count} ta mahsulot topildi`;
    }
}

/* ===== FILTERLARNI TOZALASH ===== */
function resetFilters() {
    activeCategory = null;
    searchInput.value = "";
    if (priceMinInput) priceMinInput.value = "";
    if (priceMaxInput) priceMaxInput.value = "";
    if (stockFilter) stockFilter.value = "all";
    if (sortSelect) sortSelect.value = "default";
    
    applyFilters();
    renderCategories();
}

/* ===== EVENT LISTENERS ===== */
searchInput.addEventListener("input", applyFilters);

if (priceMinInput) priceMinInput.addEventListener("input", applyFilters);
if (priceMaxInput) priceMaxInput.addEventListener("input", applyFilters);
if (stockFilter) stockFilter.addEventListener("change", applyFilters);
if (sortSelect) sortSelect.addEventListener("change", applyFilters);
if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", resetFilters);

/* ===== SAVATGA QO'SHISH ===== */
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    if (product.stock === 0) {
        alert("Bu mahsulot omborda tugagan ❌");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(p => p.id === id);

    if (item) {
        if (item.qty >= product.stock) {
            alert(`Omborda faqat ${product.stock} ta bor ⚠️`);
            return;
        }
        item.qty += 1;
    } else {
        cart.push({
    id: product.id,
    name: product.name,
    price: getDiscountPrice(product), // 👈 shu
    img_url: product.img_url,
    qty: 1
});

    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Mahsulot savatga qo'shildi ✅");
}

/* ===== INIT ===== */
renderCategories();
applyFilters();