document.getElementById("icon__menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar__menu");
}

window.onscroll = function(){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_logo");
    elemento1.style.bottom = posicion * 0.1 + "px";


}