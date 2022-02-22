//General
new WOW().init();
const modalimg = document.querySelector('#modalimg');
const navbarMenu = document.querySelector('#mainmenu');
const navLinks = document.querySelectorAll('.nav-link');
//Gallery modal image changes
function otvoriModal(br){
    modalimg.src = `images/gal${br}.jpg`;
}
//Some navbar smoothing changes
navLinks.forEach(item => item.addEventListener('click', function() {
    navbarMenu.classList.remove('show');
}))
