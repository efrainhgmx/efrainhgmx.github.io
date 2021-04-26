const menuIcon = document.getElementById('menu');
const menu = document.querySelector('.sub-menu');
const mobileMedia = window.matchMedia('screen (max-width: 768px)');

const menuActive = () => {
    if(mobileMedia) {
        menuIcon.addEventListener('click', hideShow);
        menu.addEventListener('click', hideShow);
    } else {
        menuIcon.removeEventListener('click', hideShow);
        menu.removeEventListener('click', hideShow);
    }
}

const hideShow = () => {
    if(menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}

menuActive();