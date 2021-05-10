const menuIcon = document.getElementById('menu');
const menu = document.querySelector('.sub-menu');
const body = document.querySelector('body');
const mobileMedia = window.matchMedia('screen (max-width: 768px)');

const menuActive = () => {
    if(mobileMedia) {
        menuIcon.addEventListener('click', hideShow);
        /* menu.addEventListener('click', hideShow); */
    } else {
        menuIcon.removeEventListener('click', hideShow);
        /* menu.removeEventListener('click', hideShow); */
    }
}

const hideShow = () => {
    if(menu.classList.contains('is-active') && body.classList.contains('no-scrooll') && menuIcon.getAttribute("style") === "position: fixed; top: 33px; right: 30px;") {
        menu.classList.remove('is-active');
        body.classList.remove('no-scrooll');
        menuIcon.setAttribute("style", "position: relative");
    } else {
        menu.classList.add('is-active');
        body.classList.add('no-scrooll');
        menuIcon.setAttribute("style", "position: fixed; top: 33px; right: 30px;");
    }
}

menuActive();