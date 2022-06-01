//Obtener datos del Formulario
var form = document.getElementById('forms');
      form.onclick = function(e){
        e.preventDefault();
      var name = document.getElementById('name').value;
        console.log(name);
      document.getElementById('print').innerHTML=name;
      }


//Contador de Visitas
var contador = document.querySelector(".website-counter");
var btnReiniciar = document.querySelector("#reset");
var contadorVisita = localStorage.getItem("page_view");

// Check if page_view entry is present
if (contadorVisita) {
  contadorVisita = Number(contadorVisita) + 1;
  localStorage.setItem("page_view", contadorVisita);
} else {
  contadorVisita = 1;
  localStorage.setItem("page_view", 1);
}
contador.innerHTML = contadorVisita;

// reiniciar el contador
btnReiniciar.addEventListener("click", () => {
  contadorVisita = 1;
  localStorage.setItem("page_view", 1);
  contador.innerHTML = contadorVisita;
});

