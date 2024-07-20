const images = [
    './image/slide-1.png',
    './image/slide-2.png'
];

let currentIndex = 0;

const header = document.querySelector('.header');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const textbox = document.querySelector('.textbox');
const button  = document.querySelector('.button');
const indicators = document.querySelectorAll('.indicator');

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

function updateSlider() {
    header.style.backgroundImage = `url(${images[currentIndex]})`;
    updateVisibility();
    updateIndicators();
}

function updateVisibility() {
    if (currentIndex === 0) {
        textbox.style.display = 'block';
        button.style.display = 'block';
    } else {
        textbox.style.display = 'none';
        button.style.display = 'none';
    }
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Handle indicator click
indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateSlider();
    });
});

// Menu toggle for mobile
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Change the icon to "X" when menu is active
    if (menu.classList.contains('active')) {
        menuToggle.innerHTML = '✕'; // X symbol
        document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
        menuToggle.innerHTML = '☰'; // Hamburger symbol
        document.body.style.overflow = ''; // Enable scrolling
    }
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.innerHTML = '☰'; // Reset to hamburger symbol
        document.body.style.overflow = ''; // Enable scrolling
    }
});

// Initial setup
updateSlider();
