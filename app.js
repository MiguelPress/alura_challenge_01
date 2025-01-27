// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let cantidadAmigosAgregados = 0;
let inputNombreAmigos = "";
let ultimoAgregado = "";
const soloLetras = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/;
const listaUlAmigos = document.querySelector("#listaAmigos");
const listaGanador = document.querySelector("#resultado");

function actualizarLista() {
  if (listaAmigos.length == 0) {
    listaAmigos.push(inputNombreAmigos);
    document.getElementById("listaAmigos").innerHTML += `<li>${listaAmigos[0]}</li>`;
   }else{
      listaAmigos.push(inputNombreAmigos);
      document.getElementById("listaAmigos").innerHTML += `<li>${listaAmigos[cantidadAmigosAgregados]}</li>`;
    }
}

function agregarAmigo() {
  inputNombreAmigos = document.getElementById("amigo").value;
  let valido = validarTexto();
  console.log(valido);
  if (!valido) {
    if (listaAmigos.length == 0) {
      limpiarListas();
      actualizarLista();
      limpiarInput();
    } else if (listaAmigos.length > 0) {
      if (listaAmigos.includes(inputNombreAmigos)) {
        let pregunta = confirm(`Ya tienes a ${inputNombreAmigos} agregado, ¿deseas continuar?`);
        if (pregunta) {
          console.log(valido);
          limpiarInput();
          actualizarLista();
        } else {
          limpiarInput();
          console.log(listaAmigos);
        }
      } else {
        actualizarLista();
        limpiarInput();
      }
    }
  } else {
    limpiarInput();
  }
  console.log(listaAmigos, cantidadAmigosAgregados);
  cantidadAmigosAgregados = listaAmigos.length;
}

function limpiarListas() {
  listaUlAmigos.innerHTML = "";

  if (listaAmigos.length == 0) {
    listaGanador.innerHTML = "";
  }
  listaAmigos.length = 0;
 }

function limpiarInput() {
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
}

function generaNumRandom(limiteRandom) {
  return Math.floor(Math.random() * limiteRandom);
}

function sortearAmigo() {
  let numElegido = generaNumRandom(cantidadAmigosAgregados);
  if (listaAmigos.length > 1) {
    document.getElementById("resultado").innerHTML += `<li>¡El amigo secreto ganador es: ${listaAmigos[numElegido]}!</li>`;
    console.log("El amigo secreto ganador es: ", listaAmigos[numElegido], numElegido);
    limpiarListas();
 
  } else {
    alert("Debes agregar al menos dos amigos para poder sortear");
  }
}

function validarTexto() {
  if (!soloLetras.test(inputNombreAmigos) || inputNombreAmigos == "") {
    alert("Debes escribir un nombre válido");
    return true;
  }
}
