const headerImages = [
    { id: 1, img_url: "../images/header-images/kenwood.png" },
    { id: 2, img_url: "../images/header-images/muddatli-tolov.png" },
    { id: 3, img_url: "../images/header-images/tezkor.png" }
];

const sliderWrapper = document.getElementById("sliderWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 1;
let interval;

/* ===== RENDER SLIDES ===== */
function renderSlides() {
    sliderWrapper.innerHTML = "";

    // clone last
    sliderWrapper.innerHTML += `
        <div class="slide">
            <img src="${headerImages[headerImages.length - 1].img_url}">
        </div>
    `;

    // real slides
    headerImages.forEach(item => {
        sliderWrapper.innerHTML += `
            <div class="slide">
                <img src="${item.img_url}">
            </div>
        `;
    });

    // clone first
    sliderWrapper.innerHTML += `
        <div class="slide">
            <img src="${headerImages[0].img_url}">
        </div>
    `;

    updateSlider(false);
}

function updateSlider(animate = true) {
    sliderWrapper.style.transition = animate
        ? "transform 0.6s cubic-bezier(.4,0,.2,1)"
        : "none";

    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* ===== CONTROLS ===== */
function nextSlide() {
    currentIndex++;
    updateSlider();
}

function prevSlide() {
    currentIndex--;
    updateSlider();
}

/* loop fix */
sliderWrapper.addEventListener("transitionend", () => {
    if (currentIndex === headerImages.length + 1) {
        currentIndex = 1;
        updateSlider(false);
    }

    if (currentIndex === 0) {
        currentIndex = headerImages.length;
        updateSlider(false);
    }
});

/* buttons */
nextBtn.addEventListener("click", () => {
    stopAuto();
    nextSlide();
    startAuto();
});

prevBtn.addEventListener("click", () => {
    stopAuto();
    prevSlide();
    startAuto();
});

/* auto slide */
function startAuto() {
    interval = setInterval(nextSlide, 4500);
}

function stopAuto() {
    clearInterval(interval);
}

renderSlides();
startAuto();
