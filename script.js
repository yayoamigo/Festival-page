//HAMBURGER-MENU
function mobileMenu() {
 const window = document.querySelector('.hambu-wind');
 window.classList.replace('not-active', 'active');
}

function closeMenu() {
 const window = document.querySelector('.hambu-wind');
 window.classList.replace('active', 'not-active');
}


document.getElementById('ham-link').addEventListener('click', mobileMenu);
document.getElementById('close').addEventListener('click', closeMenu);
const anchorElm = document.querySelectorAll('.pop-window');

for (let i = 0; i < anchorElm.length; i += 1) {
 anchorElm[i].addEventListener('click', closeMenu);
}

