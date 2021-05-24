const menuIcon = document.getElementById('menu');
const menu = document.querySelector('.sub-menu');
const body = document.querySelector('body');
const mobileMedia = window.matchMedia('screen (max-width: 768px)');
const firstLine = document.getElementById('first-span');
const secondLine = document.getElementById('second-span');
const thirdLine = document.getElementById('third-span');


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
    menu.classList.contains('is-active') ? menu.classList.remove('is-active') : menu.classList.add('is-active');
    //body.classList.contains('no-scrooll') ? body.classList.remove('no-scrooll') : body.classList.add('no-scrooll');
    firstLine.classList.contains('first-line') ? firstLine.classList.remove('first-line') : firstLine.classList.add('first-line');
    secondLine.classList.contains('first-line', 'second-line') ? secondLine.classList.remove('first-line', 'second-line') : secondLine.classList.add('first-line', 'second-line');
    thirdLine.classList.contains('first-line', 'third-line') ? thirdLine.classList.remove('first-line', 'third-line') : thirdLine.classList.add('first-line', 'third-line');
    menuIcon.getAttribute("style") === "position: fixed; top: 38px; right: 30px;" ? menuIcon.setAttribute("style", "position: relative") : menuIcon.setAttribute("style", "position: fixed; top: 38px; right: 30px;");
}

menuActive();