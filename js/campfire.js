/*
 * js file for campfire interactivity
 * by Daniel
 */
const FIRE_FILE_PATH = "./source/bonfire.png";
//kind of a global variable
var counter = 0;
//display everything into the campfire div
const imgSpace = document.getElementById("campfire");

//display fire
displayFire();

//add button
//init button
let button = document.createElement("button");
button.innerHTML = "fan the flames";
button.addEventListener("click", function () {
  interact();
});
imgSpace.appendChild(button);

//add text box for button feedback
let textBox = document.createElement("textBox");
imgSpace.appendChild(textBox);
var messages = [];

/**
 * functions
 */

//displays the default state of the fire
function displayFire() {
  //add image
  let fire = document.createElement("img");
  fire.src = FIRE_FILE_PATH;
  imgSpace.appendChild(fire);
}

// what happens when the user actually clicks the button
function interact() {
  let output = null;

  //create instance of text
  messages[counter] = document.createElement("p");
  //console.log(counter + " is at.");

  //displays something new for each counter
  switch (counter) {
    case 0:
      output = "<em>you fan the flames</em>";
      break;
    case 1:
      output = "<em>you continue to fan the flames</em>";
      break;
    case 2:
    case 4:
      output = "<em>you fan the flames some more</em>";
      break;
    case 7:
      output = "<em>you toss some kindling into the flame</em>";
      break;
    case 3:
      output = "ok the flames are really high now";
      break;
    case 5:
      output = "dude stop it, the flames are getting too big";
      break;
    case 6:
      output = "please, i think it's going to burn down";
      break;
    case 8:
      setFire();
  }
  //fill the message
  messages[counter].innerHTML = output;

  //so it doesn't overload that much
  if (counter < 9) {
    //reloading and posting all previous entries
    for (let i = counter; i >= 0; i--) {
      // console.log(messages[i] + " i = " + i + " counter = " + counter);
      textBox.appendChild(messages[i]);
    }
    counter++;
  }
}

//note due to time constraints, i'm going to have it link to a second page
//i should've had the text and stuff all display dynamically - curses to my lack of foresight
//haha need to limit the ambition or i'll be working on this literally forever cause it's fun
//set the page on fire lol
function setFire() {
  //remove the button and textbox
  imgSpace.removeChild(button);
  imgSpace.removeChild(textBox);
  console.log("setFire :3, button and text shotuld be gone");

  //idk i guess the area's on fire or something
  //change the bg to a light red
  setTimeout(goToFire(), 2000);
  //marquee the fire emoji :/
}

//redirects to fire.html
function goToFire() {
  window.location.replace("fire.html");
}