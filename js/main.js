function toggleMenu() {
    var menu = document.querySelector('#nav-menu');
    menu.classList.toggle('open')
    var menuIcon = document.querySelector('.menu-resp-btn');
    (menuIcon.innerText === '☰') ? menuIcon.innerHTML = '&times;': menuIcon.innerText = '☰'
}

function openModal() {
    var modalSelector = document.querySelector('.modal-container');
    modalSelector.classList.toggle('show-modal')
}

function saveMail() {
    var mailAddr = document.querySelector('input.mail-sumbit').value
}