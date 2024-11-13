let resultado = 0;

function limpiar() {
  pantalla.textContent = "";
  operacion = ["", "", ""];
  console.log(operacion);
}

let igual = document.getElementById("igual").addEventListener("click", () => {
  if (operacion[0] != "" && operacion[2] != "") {
    if (operacion[1] == "+") {
      resultado = parseInt(operacion[0]) + parseInt(operacion[2]);
      pantalla.textContent = resultado;
      console.log(resultado);
    } else if (operacion[1] == "-") {
      resultado = parseInt(operacion[0]) - parseInt(operacion[2]);
      pantalla.textContent = resultado;
      console.log(resultado);
    } else if (operacion[1] == "*") {
      resultado = parseInt(operacion[0]) * parseInt(operacion[2]);
      pantalla.textContent = resultado;
      console.log(resultado);
    } else if (operacion[1] == "/") {
      resultado = parseInt(operacion[0]) / parseInt(operacion[2]);
      pantalla.textContent = resultado;
      console.log(resultado);
    }
  } else {
    pantalla.textContent = "Error";
  }
});

let pantalla = document.getElementById("pantalla");

let operacion = ["", "", ""];

function ingresarNumero(e) {
  pantalla.textContent += e.textContent;

  if (operacion[1] == "") {
    operacion[0] += e.textContent;
  } else if (operacion[1] != "") {
    operacion[2] += e.textContent;
  }

  console.log(operacion);
  console.log(e.textContent);
}

function signo(e) {
  if (operacion[1] == "") {
    operacion[1] = e.textContent;
    pantalla.textContent += e.textContent;
  } else {
    operacion[1] = e.textContent;
    pantalla.textContent = `${operacion[0]}${operacion[1]}`;
  }
  console.log(operacion);
}

let retro = document.getElementById("retro").addEventListener("click", () => {
  if (operacion[2] != "") {
    operacion[2] = operacion[2].slice(0, operacion[2].length - 1);
    console.log(operacion);
  } else if (operacion[1] != "") {
    operacion[1] = operacion[1].slice(0, operacion[1].length - 1);
    console.log(operacion);
  } else if (operacion[0] != "") {
    operacion[0] = operacion[0].slice(0, operacion[0].length - 1);
    console.log(operacion);
  }
  pantalla.textContent = `${operacion[0]}${operacion[1]}${operacion[2]}`;
});
