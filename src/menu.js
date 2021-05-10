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
    if(menu.classList.contains('is-active') && body.classList.contains('no-scrooll') && menuIcon.getAttribute("style") === "position: fixed; top: 33px; right: 30px;" && firstLine.classList.contains('first-line') && secondLine.classList.contains('first-line', 'second-line') && thirdLine.classList.contains('first-line', 'third-line')) {
        menu.classList.remove('is-active');
        body.classList.remove('no-scrooll');
        firstLine.classList.remove('first-line');
        secondLine.classList.remove('first-line', 'second-line');
        thirdLine.classList.remove('first-line', 'third-line');
        menuIcon.setAttribute("style", "position: relative");
    } else {
        menu.classList.add('is-active');
        body.classList.add('no-scrooll');
        firstLine.classList.add('first-line');
        secondLine.classList.add('first-line', 'second-line');
        thirdLine.classList.add('first-line', 'third-line');
        menuIcon.setAttribute("style", "position: fixed; top: 33px; right: 30px;");
    }
}

menuActive();