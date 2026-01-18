const productsGrid = document.getElementById("productsGrid");
const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");

/* ===== URL’DAN CATEGORYNI O‘QISH ===== */
const params = new URLSearchParams(window.location.search);
const urlCategory = params.get("category");
let activeCategory = urlCategory ? Number(urlCategory) : null;

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

/* ===== RENDER PRODUCTS ===== */
function renderProducts(list) {
    productsGrid.innerHTML = "";

    if (list.length === 0) {
        productsGrid.innerHTML = "<p>Mahsulot topilmadi</p>";
        return;
    }

    list.forEach(p => {
        productsGrid.innerHTML += `
            <div class="product-card">
                <a href="product.html?id=${p.id}" style="text-decoration: none;">
                    <img src="${p.img_url}" alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p class="price">${p.price.toLocaleString()} so'm</p>
                    <p class="stock">Omborda: ${p.stock} ta</p>
                </a>
            </div>
        `;
    });
}

/* ===== FILTER ===== */
function selectCategory(catId) {
    activeCategory = catId;
    applyFilters();
    renderCategories(); // active class yangilash
}

/* ===== APPLY FILTERS ===== */
function applyFilters() {
    let filtered = [...products];

    if (activeCategory !== null) {
        filtered = filtered.filter(p => p.categoryId === activeCategory);
    }

    const search = searchInput.value.toLowerCase();
    if (search) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(search)
        );
    }

    renderProducts(filtered);
}

/* ===== SEARCH ===== */
searchInput.addEventListener("input", applyFilters);

/* ===== INIT ===== */
renderCategories();
applyFilters();
