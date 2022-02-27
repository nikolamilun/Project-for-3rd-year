//General
new WOW().init();
const modalimg = document.querySelector('#modalimg');
const navbarMenu = document.querySelector('#mainmenu');
const navLinks = document.querySelectorAll('.nav-link');
const progBar = document.querySelector('#pbar');
//Gallery modal image changes
function otvoriModal(br){
    modalimg.src = `images/gal${br}.jpg`;
}
//Some navbar smoothing changes
navLinks.forEach(item => item.addEventListener('click', function() {
    navbarMenu.classList.remove('show');
}))
function getPerc(){
    let rez = Math.round(window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100);
    if(rez > 100)
        rez = 100;
    return rez;
}
window.addEventListener('scroll', function(){
    let off = this.scrollY;
    progBar.ariaValueNow = `${getPerc()}`;
    progBar.style.width = `${getPerc()}%`;
})
