function toggleMenu() {
    var menu = document.querySelector('#nav-menu');
    // console.log('main menu', menu)
    menu.classList.toggle('open')
    var menuIcon = document.querySelector('.menu-resp-btn');
    (menuIcon.innerText === '☰') ? menuIcon.innerHTML = '&times;': menuIcon.innerText = '☰'
}

function openModal() {
    var modalSelector = document.querySelector('.modal');
    // console.log(modalSelector);

    modalSelector.classList.toggle('show-modal')
}