// variables
const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');

// event-handler
menuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show-menu')
});