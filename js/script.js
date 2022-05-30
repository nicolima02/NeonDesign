let fotos = document.getElementsByClassName("img-trabajo");
let btn = document.getElementById("btn");
let fondo = document.getElementById("fondo");

var g = document.getElementsByClassName('img-trabajo');
for (var i = 0, len = g.length; i < len; i++) {

    (function(index) {
        g[i].onclick = function() {

            function agrandarImg() {
                fotos[index].id = "imgGrande";
                btn.className = "boton-abierto";
                fondo.className = "fondo-abierto";
            }

            function achicarImg() {
                fotos[index].id = "foto";
                btn.className = "boton-cerrado";
                fondo.className = "fondo-cerrado";

            }
            fotos[index].addEventListener("click", agrandarImg);
            btn.addEventListener("click", achicarImg);
        }
    })(i);
}