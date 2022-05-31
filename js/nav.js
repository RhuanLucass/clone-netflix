const header = document.querySelector('header .container');

// O background do header muda de cor quando não estáno topo da página
window.addEventListener('scroll', backgroundHeader);

function backgroundHeader(){
    if (window.scrollY > 0)
        header.classList.add('header-black'); // > 0 ou outro valor desejado
    else
        header.classList.remove('header-black');
}

// Nav muda para menu flutuante
const button = document.querySelector('.tablet p');
const tablet = document.querySelector('.tablet');
const menu = document.querySelector('.logo-nav .tablet .menu');
const overlay = document.querySelector('.overlay');


button.addEventListener('click', abrir);
overlay.addEventListener('click', fechar);

function abrir(){
    toggleMenu();
    addOverlay();
}

// function fechar(){
//     fecharMenu();
//     fecharOverlay();
// }

function fecharMenu(){
    menu.classList.remove('display-iblock');
}

function addOverlay(){
    overlay.classList.add('display-iblock');
}

function fecharOverlay(){
    overlay.classList.remove('display-iblock');
}

function toggleMenu(){  
    menu.classList.toggle('display-iblock');
}   


const search = document.querySelector('header .utilities .fa-magnifying-glass');
const iconeSearch = document.querySelector('header .utilities form .fa-magnifying-glass');
const input = document.querySelector('header .utilities form input');

search.addEventListener('click', abrirS);
overlay.addEventListener('click', fechar);

function abrirS(){
    addSearch();
    addPosition();
    addOverlay();
}

function addSearch(){
    input.classList.toggle('display-iblock');
}

function addPosition(){
    iconeSearch.classList.toggle('position');
}

function fechar(){
    fecharSearch();
    fecharPosition();
    fecharOverlay();
    fecharMenu();
}

function fecharSearch(){
    input.classList.remove('display-iblock');
}

function fecharPosition(){
    iconeSearch.classList.remove('position');
}