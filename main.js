// change navbar styles on scroll


window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})

// FAQs show and hide

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})


// swiper


// navbar show hide

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeMenuBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none'
})


const closeMenu = () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeMenuBtn.style.display = 'none'
}
closeMenuBtn.addEventListener('click', closeMenu)


window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        menuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'none'
    } else {
        menuBtn.style.display = 'inline-block';


    }
})