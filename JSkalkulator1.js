

function sestej() {   //funkcija sestej
   var a = document.getElementById("prvaSt").value;
   var b = document.getElementById("drugaSt").value;

  var rezultat = parseInt(a) + parseInt(b);
  document.getElementById("izhod").value = rezultat;
}
function odstej() {  //funkcija odštej
  var a = parseInt(document.getElementById("prvaSt").value);  //lokalne spremenljivke
  var b = parseInt(document.getElementById("drugaSt").value);
  var rezultat = a - b; //funkcija vrne rezultat odštevanja
  document.getElementById("izhod").value = rezultat;
}
function zmnozi() {   //funkcija zmnozi
  var a = parseInt(document.getElementById("prvaSt").value);  //lokalne spremenljivke
  var b = parseInt(document.getElementById("drugaSt").value);
  var rezultat = a * b; //funkcija vrne rezultat množenja
  document.getElementById("izhod").value = rezultat;
}

function zdeli() {   //funkcija zdeli
  var a = parseInt(document.getElementById("prvaSt").value);  //lokalne spremenljivke
  var b = parseInt(document.getElementById("drugaSt").value);
  var rezultat = a / b; //funkcija vrne rezultat deljenja
  document.getElementById("izhod").value = rezultat;
}

/*
var operacija = prompt("Vnesi operator (+,-,*,/): ");
var prvoStevilo = parseInt(prompt("Vnesi prvo število: "));
var drugoStevilo = parseInt(prompt("Vnesi drugo število: "));
var rezultat;

if (operacija === "+") {
  rezultat = prvoStevilo + drugoStevilo;
  console.log("Vsota je: " + rezultat);
} else if (operacija === "-") {
  rezultat = prvoStevilo - drugoStevilo;
  console.log("Razlika je: " + rezultat);
} else if (operacija === "*") {
  rezultat = prvoStevilo * drugoStevilo;
  console.log("Razlika je: " + rezultat);
} else if (operacija === "/") {
  rezultat = prvoStevilo / drugoStevilo;
  console.log("Razlika je: " + rezultat);
}

console.log(operacija);

/*alert(parseInt(prvoStevilo) + parseInt(drugoStevilo));

//console.log(parseInt(prvoStevilo) + parseInt(drugoStevilo));
console.log(
  sestej( prvoStevilo, drugoStevilo )
);
*/
