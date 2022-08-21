// burger menu
let burgerButton = document.querySelector('.header__burger');
if (burgerButton) {
    burgerButton.addEventListener('click', function() {
        this.classList.toggle('_active');
        document.querySelector('.header__nav-list').classList.toggle('_active');
        document.querySelector('body').classList.toggle('_locked');
    });
}



// life swiper
const swiper = new Swiper('.life-swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            spaceBetween: 10,
        },
        768: {
            spaceBetween: 40,
            // slidesPerView: 2,
        },
        768: {
            spaceBetween: 40,
        },
        1300: {
            spaceBetween: 80,
        },
    },
});

// life swiper element on click 
let lifeSlides = document.querySelectorAll('.life-slide__image');
lifeSlides.forEach(el => {
    el.addEventListener('click', function () {
        this.classList.toggle('_active')
        let slideContent = this.nextElementSibling;
        if (slideContent.style.maxHeight) {
            slideContent.style.maxHeight = null;
        }
        else {
            slideContent.style.maxHeight = slideContent.scrollHeight + 'px';
        }
    });
});


const reviewSwiper = new Swiper('.review__swiper', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.review__swiper-button-next',
        prevEl: '.review__swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    spaceBetween: 20,
});

// header links smooth scrool

document.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let id = this.getAttribute('href').substring(1);
        let target = document.getElementById(id);
        if (target) {
            let coords = target.getBoundingClientRect().top;
            window.scrollBy({
                top: coords,
                behavior: 'smooth'
            });
            closeMenu();
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            closeMenu();
        }
        
    });
});

function closeMenu() {
    let burgerButton = document.querySelector('.header__burger');
    if (burgerButton.classList.contains('_active')) {
        burgerButton.classList.remove('_active');
        document.querySelector('.header__nav-list').classList.remove('_active');
        document.querySelector('body').classList.remove('_locked');
    }
}