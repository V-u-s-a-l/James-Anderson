const menu = document.querySelector('menu');
window.addEventListener('scroll',menuScroll);
function menuScroll(){
    menu.classList.toggle('menu-fixed',window.scrollY > 100);
}

const navSpan = document.querySelector('.nav-span');
const navMobil = document.querySelector('.nav-mobil');
navSpan.addEventListener('click',navSpanClick);
function navSpanClick(){
    navSpan .classList.toggle('active');
    navMobil.classList.toggle('active');
}


const mobilSpan = document.querySelector('.mobil-span');
mobilSpan.addEventListener('click',navBarSpanClick);
function navBarSpanClick (){
    navMobil.classList.remove('active');
    navSpan .classList.remove('active');
}
// mobilChildren.children[1]
// const mobilChildren = document.querySelector('.mobil-has-children');
const iFirst = document.getElementById('first-icon')
iFirst.addEventListener('click',iClick);
function iClick(){
    document.querySelector('.mobil-dropdown').classList.toggle('show');
    iFirst.classList.toggle('show');  
}

const iLast = document.getElementById('last')
iLast.addEventListener('click',lastClick);
function lastClick(){
    document.querySelector('.mobil-dropdown-last').classList.toggle('show');
    iLast.classList.toggle('show');  
}



