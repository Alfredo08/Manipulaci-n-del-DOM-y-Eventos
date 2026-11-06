function mostrarMensaje(){
    alert('Cerrando sesión!');
}

function fondoVerde(elemento){
    elemento.target.classList.add('extra');
}

function quitarFondoVerde(elemento){
    elemento.target.classList.remove('extra');
}

let botonCerrarSesion = document.querySelector('.signOut');

botonCerrarSesion.addEventListener('click', mostrarMensaje);


botonCerrarSesion.addEventListener('click', function(){
    alert('Cerrando sesión!');
});

let listaCard = document.querySelectorAll('.card-header');

for(let i = 0; i < listaCard.length; i ++){
    listaCard[i].addEventListener('mouseover', fondoVerde);
    listaCard[i].addEventListener('mouseout', quitarFondoVerde);
}