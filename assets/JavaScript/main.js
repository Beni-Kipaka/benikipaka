/* =====SHOW MENU=====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')




/*=====MENU SHOW=====*/
/* Validate if constant exists*/
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=====MENU HIDDEN=====*/
/* Validate if constant exists*/
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=====REMOVE MENU MOBILE=====*/
const navLink = document.querySelectorAll('.nav__link')


const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=====SWIPER PROJECTS=====*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    }
});



/*=====SWIPER TESTIMINIAL=====*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})



/*=====EMAIL JS=====*/


















































