function crearTecladoAlfabetico() {
  let teclado = document.getElementById("teclado");

  for (let code = 65; code <= 90; code++) {
    let letra = String.fromCharCode(code);

    let tecla = document.createElement("div");
    tecla.className = "tecla";

    tecla.textContent = letra;

    if (esVocal(letra)) {
      tecla.classList.add("vocal");
    } else {
      tecla.classList.add("consonante");
    }

    teclado.appendChild(tecla);
  }

  for (let i = 1; i <= 10; i++) {
    let tecla = document.createElement("div");
    tecla.className = "tecla numero";

    tecla.textContent = (i === 10) ? 0 : i;

    teclado.appendChild(tecla);
  }
}

function esVocal(letra) {
  return ['A', 'E', 'I', 'O', 'U'].includes(letra);
}

crearTecladoAlfabetico();
