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


function removerConexion(elemento){
    const solicitud = elemento.target.closest('.card-list-item');
    solicitud.remove();

    let contadorConexionesPendientes = document.querySelector('#connectionRequestNumber').textContent;
    contadorConexionesPendientes = Number(contadorConexionesPendientes) - 1;
    document.querySelector('#connectionRequestNumber').textContent = contadorConexionesPendientes;
}

let rechazarConexion = document.querySelectorAll('.cerrar');

for(let i = 0; i < rechazarConexion.length; i ++){
    rechazarConexion[i].addEventListener('click', removerConexion);
}

