const FIRE_AREA = document.getElementById("fireArea");
// console.log(FIRE_AREA);

//fire script
for (let i = 0; i < 3; i++) {
    setInterval(placeFire, 1000);
    console.log(i);
}

/**
* functions
*/

//places a fire emji at a random location on the screen
function placeFire() {
  const FIRE = "0x1F525";

  //create element
  let fire = document.createElement("p");
  //fire.id = "fireEmote";
  fire.textContent = String.fromCodePoint(FIRE);
  fire.style.position = "absolute";

  //randomize final location
  fire.style.bottom = Math.round(Math.random() * window.innerHeight) + "px";
  fire.style.left = Math.round(Math.random() * window.innerWidth) + "px";

    //add fire to body
  FIRE_AREA.appendChild(fire);
}

//checks the user input for *something* and then redirects to the proper page
function inputCheck() {
  //get user input
  let i = document.getElementById("input").value;

  //if user input is possibly a valid number
  //needs to be 9 digits
  if (i % 1 === 0 && i > 99999999 && i < 1000000000) {
    gotoAbout();
  } else {
    document.getElementById("error").innerHTML =
      "yea that's not gonna cut it<br>try again";
  }
}

//go to the about page or something
function gotoAbout() {
  window.location.replace("about.html");
}