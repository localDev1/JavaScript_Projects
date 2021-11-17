//FADE CHALLENGE
var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

//Time of fade
function fadeIn() {
    setInterval(show, 200);
}

//creating fade effect 
function show() {
    var body = document.getElementById("body");
    opacity = Number(window.getComputedStyle(body)
                     .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}

// Form Validation to create an alert if someone attempts to submit the form with an empty field.
function validateForm() {
    let x = document.forms["myForm"]["phone"].value;
    if (x == "") {
      alert("Phone Number must be filled out");
      return false;
    }
  }

//Create a popup contact form (open and close function)
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

//SLIDESHOW CHALLENGE
$("#slideshow > div:gt(0)").hide();
setInterval(function() {
    $("#slideshow > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slideshow");
},3000);
  