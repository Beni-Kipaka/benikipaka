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
});



/*=====EMAIL JS=====*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = (e) => {
    e.preventDefault()

    //Verifie si les zones de texte a une insertion
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        //Ajout et enlever la couleur
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //voir le message
        contactMessage.textContent = 'Veuillez remplir tous les champs svp 🐱‍💻'
    }else{
        //services ID, Template ID, #Form - Publié
        emailjs.sendForm('service_ws2ogrp','template_utmb6ik','#contact-form','ERGxAsJqC2GTn0ZZM')
            .then(() =>{
                //Montre le message et la couleur
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message envoyé avec succès 💚'
                
                //Renvoi du message apres 5 secondes
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) =>{
                alert('Ouups, Quelque chose s est mal passé...', error)
            })

        //Videz les zones de saisie apres soumission du formulaire
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)


/*=====SCROLL SECTIONS ACTIVE LINK=====*/
const scrollActive = () =>{
    const scrollY = window.pageYOffset

    SpeechRecognitionResult.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*=====SHOW SCROLL UP=====*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/*=====DARK LIGHT THEME=====*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bi-sun'


//Prevoir la selection du sujet (si linkAction'utilisateur selectionne)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bi bi-moon' : 'bi bi-sun'



if (selectedTheme) {
    //
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bi bi-moon' ? 'add' : 'remove'](iconTheme)
}



//Activer et desactiver le thme manuellement avec le button
themeButton.addEventListener('click', () => {

    //Ajouter ou Enlever le mode sombre et/ou le theme de l'icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //On enregistre le theme et l'icon actuel choisie par l'utilisateur
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-Icon', getCurrentIcon())
})






/*=====CHANGE BACKGROUND HEADER=====*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    //
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)





/*=====SCROLL REVEAL ANIMATION=====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    deplay: 400,
    reset: true 
    /* Si reset egale a true(vrai) Animations */
})

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__info div`, {deplay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__content, .services__card`, {interval: 100})

























