/*=============== MOSTRAR MENÚ ================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle ){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== ELIMINAR MENÚ MÓVIL ===============*/

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => navMenu.addEventListener('click', linkAction))


/*=============== ROPA DE SWIPER ================*/
let swiperHome = new Swiper('.home__swiper', {
    loop:true,
    grabCursor:true,
    slidesPerView: 'auto',


    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        768:{
            slidesPerView:3,
            centeredSlides: 'auto',
        },
        1152:{
            centeredSlides: 'auto',
            spaceBetween: -64,
        },
    }
});
/*=============== CAMBIAR ENCABEZADO DE FONDO ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== ANIMACIÓN DE REVELACIÓN DE DESPLAZAMIENTO ================*/


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
})

sr.reveal(`.home__swiper, home__footer`)
sr.reveal(`.home__circle`, {scale: 1.5, delay: 300})
sr.reveal(`.home__subcircle`, {scale: 1.5, delay: 500})
sr.reveal(`.home__title`, {scale: 1, origin: 'top', delay: 1200})
sr.reveal(`.swiper-button-prev, .swiper-button-next`, {origin:'bottom'})