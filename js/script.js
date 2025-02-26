// DOM Element Selections
const navbar = document.querySelector('.navbar');
const loginForm = document.querySelector('.login-form');
const searchForm = document.querySelector('.search-form');
const themeBtn = document.querySelector('#theme-btn');

// Navigation Menu Toggle
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
};

// Login Form Toggle
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

// Search Form Toggle
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

// Theme Toggle (Light/Dark Mode)
themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    document.body.classList.toggle('active');
};

// Search Functionality
function handleSearch(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Get search input and packages
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const packages = document.querySelectorAll('.packages .box');
    
    // Filter packages based on search
    packages.forEach(package => {
        const title = package.querySelector('h3').textContent.toLowerCase();
        const description = package.querySelector('p').textContent.toLowerCase();
        
        // Show/hide packages based on search match
        package.style.display = (title.includes(searchTerm) || description.includes(searchTerm)) 
            ? '' 
            : 'none';
    });
    
    // Close search form on mobile
    searchForm.classList.remove('active');
    return false;
}

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper for client reviews
    const reviewSwiper = new Swiper('.review-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Initialize Swiper for automated client reviews
    const automatedSwiper = new Swiper('.automated-review-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Pause autoplay on hover (optional)
const reviewSlider = document.querySelector('.review-slider');
if(reviewSlider) {
    reviewSlider.addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
    });
    
    reviewSlider.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
    });
}