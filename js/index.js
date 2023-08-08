const menu = document.querySelector('nav');
const menuImagen = document.querySelector('.menuImagen');
const menuHambur = document.querySelector('#menuHambur');
const menuMobile = document.querySelector('.menuMobile');

menuImagen.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile(){          
    menuMobile.classList.toggle('inactivo')

    if(!menuMobile.classList.contains('inactivo')){
        menu.style.background = '#680707'        
        menuHambur.classList.remove('fa-bars')
        menuHambur.classList.add('fa-times')
    }else{
        menu.style.background = 'transparent'        
        menuHambur.classList.remove('fa-times')
        menuHambur.classList.add('fa-bars')
    }    
}