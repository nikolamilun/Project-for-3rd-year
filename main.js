new WOW.init();
const modalimg = document.querySelector('#modalimg');
const navbarMenu = document.querySelector('#mainmenu');
const navLinks = document.querySelectorAll('.nav-link');
function otvoriModal(br){
    modalimg.src = "images/gal" + br + ".jpg";
}
navLinks.forEach(item => item.addEventListener('click', function() {
    navbarMenu.classList.remove('show');
    navbarMenu.classList.add('hide');
}))
