// Barra lateral 

var barralateralOpen = false;
var barralateral = document.getElementById("barralateral");

function openbarralateral() {
  if(!barralateralOpen) {
    barralateral.classList.add("barralateral-responsive");
    barralateralOpen = true;
  }
}

function closebarralateral() {
  if(barralateralOpen) {
    barralateral.classList.remove("barralateral-responsive");
    barralateralOpen = false;
  }
}



