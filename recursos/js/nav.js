let buttonNav = document.getElementById('menuNav')
let buttonClose = document.getElementById('menuNav-close')
let menuDesplegable = document.getElementById('menuDesplegable')

function desplegar(){
    menuDesplegable.classList.remove('hidden')
    menuDesplegable.classList.add('visible')
}
function ocultar(){
    menuDesplegable.classList.remove('visible')
    menuDesplegable.classList.add('hidden')
}
buttonNav.addEventListener("click",()=>{if (menuDesplegable.classList.contains('hidden')){desplegar()}else {ocultar()}})
buttonClose.addEventListener("click",()=>{ocultar()})