let menu_desplegable = document.getElementById('menu');
let boton_cerrar = document.getElementById('X');

function abrir_cerrar_menu(){
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_X');
}
