// Obtén una referencia a los elementos select
const nombrepersonajes = document.getElementById("personajes");
const posterPersonaje = document.getElementById("posterPersonaje");
const characterName = document.getElementById("character-name");
const select2 = document.getElementById("select2");
const vestimenta = document.getElementById("vestimenta");

// Define las opciones para el segundo select basado en la elección del primero
const opcionesSelect2 = {
  apus: ["Selecciona un personaje", "Vestimenta 1", "Vestimenta 2"],
  homero: ["Selecciona un personaje", "Disfraz 1", "Disfraz 2"],
  Bard: ["Selecciona un personaje", "Vestimenta 1", "Vestimenta 2"],
  Liza: ["Selecciona un personaje", "Disfraz 1", "Disfraz 2"],
  March: ["Selecciona un personaje", "Vestimenta 1", "Vestimenta 2"],
  Magie: ["Selecciona un personaje", "Disfraz 1", "Disfraz 2"],
  Flanders: [
    "Selecciona un personaje",
    "Vestimenta 1",
    "Vestimenta 2",
    "Vestimenta 3",
  ],
  Barney: ["Selecciona un personaje", "Disfraz 1", "Disfraz 2"],
  Moe: ["Selecciona un personaje", "Vestimenta 1", "Vestimenta 2"],
  MontgomeryBurns: ["Selecciona un personaje", "Disfraz 1", "Disfraz 2"],
};

// Agrega un controlador de eventos al primer select
nombrepersonajes.addEventListener("change", function () {
  const valorSeleccionado = nombrepersonajes.value;

  // Actualiza la imagen y el nombre del personaje
  switch (valorSeleccionado) {
    case "apus":
      //apu
      posterPersonaje.src = "../assets/img/apus.webp";
      characterName.textContent = "apus";
      cargaVersiones();
      break;
    case "homero":
      posterPersonaje.src = "../assets/img/homeroCorre.gif";
      characterName.textContent = "Homero";
      // AQUI PONER RELLENO DEL SELECT
      break;
    case "Bard":
      //apu
      posterPersonaje.src = "../assets/img/bard.gif";
      characterName.textContent = "Bard";
      break;
    case "Liza":
      posterPersonaje.src = "../assets/img/liza.gif";
      characterName.textContent = "Liza";
      break;
    case "March":
      posterPersonaje.src = "../assets/img/marge.png";
      characterName.textContent = "March";
      break;

    case "Magie":
      posterPersonaje.src = "../assets/img/magi.png";
      characterName.textContent = "Magie";
      break;

    case "Flanders":
      posterPersonaje.src = "../assets/img/flanders.gif";
      characterName.textContent = "Flanders";
      break;

    case "Barney":
      posterPersonaje.src = "../assets/img/barney.png";
      characterName.textContent = "Barney";
      break;

    case "Moe":
      posterPersonaje.src = "../assets/img/moe.gif";
      characterName.textContent = "Moe";
      break;

    case "MontgomeryBurns":
      posterPersonaje.src = "../assets/img/MontgomeryBurns.gif";
      characterName.textContent = "Montgomery Burns";
      break;

    default:
      characterName.textContent = "apus";
      posterPersonaje.src = "../assets/img/casa.webp";
      break;
    // ... (otros casos)
  }

  // Llena el segundo select con las opciones correspondientes
  const opciones = opcionesSelect2[valorSeleccionado];
  select2.innerHTML = "";

  opciones.forEach(function (opcion) {
    const option = document.createElement("option");
    option.text = opcion;
    option.value = opcion;
    select2.add(option);
  });
});

// Agrega un controlador de eventos al segundo select
select2.addEventListener("change", function () {
  const valorSeleccionado = select2.value;
  const personajeSeleccionado = nombrepersonajes.value;

  // Actualiza la imagen del personaje en función de la selección del segundo select
  if (personajeSeleccionado === "hola") {
    switch (valorSeleccionado) {
      case "Vestimenta 1":
        vestimenta.src = "../assets/transformacion/apu1.webp";
        break;
      case "Vestimenta 2":
        vestimenta.src = "../assets/transformacion/apu2.png";
        break;
    }
  } else if (personajeSeleccionado === "apus") {
    switch (valorSeleccionado) {
      case "Vestimenta 1":
        vestimenta.src = "../assets/transformacion/apu1.webp";
        break;
      case "Vestimenta 2":
        vestimenta.src = "../assets/transformacion/apu2.png";
        break;
    }
  } else if (personajeSeleccionado === "homero") {
    switch (valorSeleccionado) {
      case "Disfraz 1":
        vestimenta.src = "../assets/transformacion/homer1.png";
        break;
      case "Disfraz 2":
        vestimenta.src = "../assets/transformacion/homer2.webp";
        break;
      // Agrega más casos según sea necesario
    }
  } else if (personajeSeleccionado === "Barney") {
    switch (valorSeleccionado) {
      case "Disfraz 1":
        vestimenta.src = "../assets/transformacion/bar1.jpg";
        break;
      case "Disfraz 2":
        vestimenta.src = "../assets/transformacion/bar2.webp";
        break;
    }
  } else if (personajeSeleccionado === "Bard") {
    switch (valorSeleccionado) {
      case "Vestimenta 1":
        vestimenta.src = "../assets/transformacion/bard1.png";
        break;
      case "Vestimenta 2":
        vestimenta.src = "../assets/transformacion/bard2.png";
        break;
    }
  } else if (personajeSeleccionado === "Liza") {
    switch (valorSeleccionado) {
      case "Disfraz 1":
        vestimenta.src = "../assets/transformacion/liza1.png";
        break;
      case "Disfraz 2":
        vestimenta.src = "../assets/transformacion/liza2.webp";
        break;
    }
  } else if (personajeSeleccionado === "March") {
    switch (valorSeleccionado) {
      case "Vestimenta 1":
        vestimenta.src = "../assets/transformacion/marge1.png";
        break;
      case "Vestimenta 2":
        vestimenta.src = "../assets/transformacion/marge2.png";
        break;
    }
  } else if (personajeSeleccionado === "Magie") {
    switch (valorSeleccionado) {
      case "Disfraz 1":
        vestimenta.src = "../assets/transformacion/magi1.jpg";
        break;
      case "Disfraz 2":
        vestimenta.src = "../assets/transformacion/magi2.webp";
        break;
    }
  } else if (personajeSeleccionado === "Flanders") {
    switch (valorSeleccionado) {
      case "Vestimenta 1":
        vestimenta.src = "../assets/transformacion/flander1.png";
        break;
      case "Vestimenta 2":
        vestimenta.src = "../assets/transformacion/flander2.png";
        break;
      case "Vestimenta 3":
        vestimenta.src = "../assets/transformacion/flander3.webp";
        break;
    }
  } else if (personajeSeleccionado === "Barney") {
    switch (valorSeleccionado) {
      case "Disfraz 1":
        vestimenta.src = "../assets/transformacion/bar1.jpg";
        break;
      case "Disfraz 2":
        vestimenta.src = "../assets/transformacion/bar2.webp";
        break;
    }
  } else if (personajeSeleccionado === "Moe") {
    switch (valorSeleccionado) {
      case "Vestimenta 1":
        vestimenta.src = "../assets/transformacion/moe1.webp";
        break;
      case "Vestimenta 2":
        vestimenta.src = "../assets/transformacion/moe2.png";
        break;
    }
  } else if (personajeSeleccionado === "MontgomeryBurns") {
    switch (valorSeleccionado) {
      case "Disfraz 1":
        vestimenta.src = "../assets/transformacion/burn1.webp";
        break;
      case "Disfraz 2":
        vestimenta.src = "../assets/transformacion/burn2.jpg";
        break;
    }
  }
});

posterPersonaje.addEventListener("click", function () {
  const personajeSeleccionado = nombrepersonajes.value;
  // Realiza la redirección basada en el personaje seleccionado
  switch (personajeSeleccionado) {
    case "apus":
      window.location.href = "../interfaz/apu.html";
      break;
    case "homero":
      window.location.href = "../interfaz/homer.html";
      break;
    case "Bard":
      window.location.href = "../interfaz/bard.html";
    break;
    case "Liza":
      window.location.href = "../interfaz/Liza.html";
      break;
    case "March":
      window.location.href = "../interfaz/March.html";
      break;
    case "Flanders":
      window.location.href = "../interfaz/flanders.html";
      break;
    case "Barney":
      window.location.href = "../interfaz/barney.html";
      break;
    case "MontgomeryBurns":
      window.location.href = "../interfaz/burns.html";
      break;
    case "Moe":
      // Redirige a la página correspondiente a Moe
      window.location.href = "../interfaz/moe.html";
      break;
    case "Magie":
      // Redirige a la página correspondiente a Magie
      window.location.href = "../interfaz/magie.html";
      break;
    // Agrega más casos para otros personajes según sea necesario
    default:
      // Redirige a una página por defecto en caso de no encontrar un caso coincidente
      window.location.href = "../interfaz/default.html";
  }
});
