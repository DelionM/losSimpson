
  const nombrepersonajes = document.getElementById("personajes");
  const posterPersonaje = document.getElementById("posterPersonaje");
  const characterName = document.getElementById("character-name");

  
  nombrepersonajes.addEventListener(
    "change",
    function () {
      switch (this.value) {
        case "apus":
        //apu    
          posterPersonaje.src = "../assets/img/apus.webp";
          characterName.textContent = "apus";
          break;
          case "homero":
            //apu    
              posterPersonaje.src = "../assets/img/homeroCorre.gif";
              characterName.textContent = "Homero";
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
      }
    },
    false
  );