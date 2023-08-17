/*
 * js file for campfire interactivity
 * by Daniel
 */
const FIRE_FILE_PATH = "./source/bonfire.png";

console.log("app.js has been loaded");
let campfire = document.getElementById("campfire");

//display fire
displayFire();

//init button
let button = document.querySelector("#menu").querySelectorAll("button");
button.addEventListener("click", function () {
  document.getElementById("selected-category").innerHTML = menu[i].textContent;
  printProducts(menu[i].textContent);
});
console.log("button loaded");



function displayFire() {}

// what happens when the user actually clicks the button
function blowFire() {}

//creates the button
function makeButton() {}
