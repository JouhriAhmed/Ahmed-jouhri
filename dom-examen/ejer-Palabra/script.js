// PALABRA SECRETA (5 letras)
const palabraSecreta = "TOMAT";

// CONTROL
let filaActual = 0;
let letraActual = 0;

// REFERENCIAS
const tablero = document.getElementById("tablero");
const teclado = document.getElementById("teclado");
const mensaje = document.getElementById("mensaje");

// MATRIZ DE CELDAS
let celdas = [];

// CREAR TABLERO 
for (let i = 0; i < 30; i++) {
  let celda = document.createElement("div");
  celda.className = "celda";
  tablero.appendChild(celda);
  celdas.push(celda);
}

//CREAR TECLADO 
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let letra of letras) {
  crearTecla(letra);
}

function crearTecla(valor) {
  let btn = document.createElement("button");
  btn.textContent = valor;
  btn.className = "tecla";
  btn.id = valor; 
  btn.onclick = () => escribirLetra(valor);
  teclado.appendChild(btn);
}

//ESCRIBIR LETRA 
function escribirLetra(letra) {
  if (letraActual < 5 && filaActual < 6) {
    let index = filaActual * 5 + letraActual;
    celdas[index].textContent = letra;
    letraActual++;
  }
}

//BORRAR letra
document.getElementById("borrar").onclick = () => {
  if (letraActual > 0) {
    letraActual--;
    let index = filaActual * 5 + letraActual;
    celdas[index].textContent = "";
  }
};

//COMPROBAR
document.getElementById("comprobar").onclick = () => {
  if (letraActual < 5) {
    mensaje.textContent = " Debes escribir 5 letras";
    return;
  }

  let palabraUsuario = "";

  for (let i = 0; i < 5; i++) {
    palabraUsuario += celdas[filaActual * 5 + i].textContent;
  }

  for (let i = 0; i < 5; i++) {
    let celda = celdas[filaActual * 5 + i];
    let letra = palabraUsuario[i];
    let botonTeclado = document.getElementById(letra);

    if (letra === palabraSecreta[i]) {
      celda.classList.add("verde");

      // pintar teclado
      if (botonTeclado) {
        botonTeclado.classList.remove("amarillo", "gris");
        botonTeclado.classList.add("verde");
      }
    }
    else if (palabraSecreta.includes(letra)) {
      celda.classList.add("amarillo");

      // pintar teclado solo si no es verde
      if (
        botonTeclado &&
        !botonTeclado.classList.contains("verde")
      ) {
        botonTeclado.classList.remove("gris");
        botonTeclado.classList.add("amarillo");
      }
    }
    else {
      celda.classList.add("gris");

      // pintar teclado solo si no es verde ni amarillo
      if (
        botonTeclado &&
        !botonTeclado.classList.contains("verde") &&
        !botonTeclado.classList.contains("amarillo")
      ) {
        botonTeclado.classList.add("gris");
      }
    }
  }

  if (palabraUsuario === palabraSecreta) {
    mensaje.textContent = " Has ganado ";
    return;
  }

  filaActual++;
  letraActual = 0;

  if (filaActual === 6) {
    mensaje.textContent = " Has perdido. Palabra: " + palabraSecreta;
  }
};
