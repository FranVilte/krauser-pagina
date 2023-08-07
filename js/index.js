const menuImagen = document.querySelector('.menuImagen');
const menuMobile = document.querySelector('.menuMobile');

menuImagen.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile(){        
    menuMobile.classList.toggle('inactivo')
}