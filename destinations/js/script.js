// Initialize Swiper
const gallerySlider = new Swiper('.gallery-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.gallery-nav-btn.next',
        prevEl: '.gallery-nav-btn.prev',
    },
});

// Theme toggle functionality with localStorage
let themeBtn = document.querySelector('#theme-btn');

// Check for saved theme preference
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('active');
    themeBtn.classList.add('fa-sun');
}

themeBtn.onclick = () => {
    document.body.classList.toggle('active');
};

// Add hover effect for navigation buttons
const navBtns = document.querySelectorAll('.gallery-nav-btn');
navBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gallerySlider.autoplay.stop();
    });
    btn.addEventListener('mouseleave', () => {
        gallerySlider.autoplay.start();
    });
}); 