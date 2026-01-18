const browseProductsEl = document.getElementById("browseProducts");
const categoryListEl = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");

let activeCategory = null;

/* Render categories */
function renderCategories() {
    categoryListEl.innerHTML = `<li onclick="filterByCategory(null)">Barchasi</li>`;

    categories.forEach(cat => {
        categoryListEl.innerHTML += `
            <li onclick="filterByCategory(${cat.id})">${cat.name}</li>
        `;
    });
}

/* Render products */
function renderProducts(list) {
    browseProductsEl.innerHTML = "";

    list.forEach(p => {
        browseProductsEl.innerHTML += `
            <div class="product-card">
                <img src="${p.img_url}">
                <h3>${p.name}</h3>
                <p class="price">${p.price.toLocaleString()} so'm</p>
            </div>
        `;
    });
}

/* Category filter */
function filterByCategory(catId) {
    activeCategory = catId;
    applyFilters();
}

/* Search */
searchInput.addEventListener("input", applyFilters);

function applyFilters() {
    let filtered = [...products];

    if (activeCategory) {
        filtered = filtered.filter(p => p.categoryId === activeCategory);
    }

    const searchValue = searchInput.value.toLowerCase();
    if (searchValue) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchValue)
        );
    }

    renderProducts(filtered);
}

/* INIT */
renderCategories();
renderProducts(products);
