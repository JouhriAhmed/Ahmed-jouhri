const letrasDiv = document.getElementById("letras");
const numerosDiv = document.getElementById("numeros");
const inputTexto = document.getElementById("texto");
const botonEnviar = document.getElementById("enviar");


const vocales = ["A", "E", "I", "O", "U"];

for (let codigo = 65; codigo <= 90; codigo++) {
  let letra = String.fromCharCode(codigo);

  let tecla = document.createElement("div");
  tecla.classList.add("tecla");
  tecla.textContent = letra;

  if (vocales.includes(letra)) {
    tecla.style.background = "green";
    tecla.style.color = "white";
  } else {
    tecla.style.background = "orange";
    tecla.style.color = "white";
  }

  tecla.addEventListener("click", () => {
    inputTexto.textContent += letra;
  });

  letrasDiv.appendChild(tecla);
}


for (let i = 0; i <= 9; i++) {
  let tecla = document.createElement("div");
  tecla.classList.add("tecla");
  tecla.textContent = i;


  if (i % 3 === 0 && i !== 0) {
    tecla.style.background = "yellow";
    tecla.style.color = "black";
  } else if (i % 2 === 0) {
    tecla.style.background = "blue";
    tecla.style.color = "white";
  } else {
    tecla.style.background = "teal";
    tecla.style.color = "white";
  }

  tecla.addEventListener("click", () => {
    inputTexto.textContent += i;
  });

  numerosDiv.appendChild(tecla);
}




botonEnviar.addEventListener("click", () => {
  alert("Texto enviado: " + inputTexto.textContent);
  inputTexto.textContent = "";
});
