/* eslint-disable */
import "bootstrap";
import { Button } from "bootstrap";
import "./style.css";

window.onload = function() {
  ramdomCard();
};

function ramdomCard() {
  const palos = ["♦", "♥", "♣", "♠"];
  const numeros = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
  let indexPalo = Math.floor(Math.random() * palos.length);
  let indexNumero = Math.floor(Math.random() * numeros.length);

  //1. obtener el elemento
  let top = document.querySelector(".top");
  let number = document.querySelector(".number");
  let bottom = document.querySelector(".bottom");

  //2. manipular
  top.innerHTML = palos[indexPalo];
  number.innerHTML = numeros[indexNumero];
  bottom.innerHTML = palos[indexPalo];

  //3. colores
  if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
    top.style.color = "red";
    bottom.style.color = "red";
  } else {
    top.style.color = "black";
    bottom.style.color = "black";
  }
}

//boton
let button = document.querySelector(".button");
button.addEventListener("click", function() {
  ramdomCard();
});

//timer
let timer;

function change() {
  timer = setInterval(ramdomCard, 10000);
}
change();

//tamaño carta
var card = document.querySelector(".card");

let resize = document.querySelector(".resize");
resize.addEventListener("click", function() {
  let h = prompt("Enter height");
  let w = prompt("Enter width");
  card.style.height = parseInt(h) + "px";
  card.style.width = parseInt(w) + "px";
});
