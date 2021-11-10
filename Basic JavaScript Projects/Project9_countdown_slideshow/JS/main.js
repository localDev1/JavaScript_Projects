
/*CREATING A JAVASCRIPT PROGRAM*/
/*function to use and create a timer that will countdown by seconds*/
function countdown() 
{
    //Creating variables 
    var seconds = document.getElementById("seconds").value;

    function tick ()
    {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        //The statement “setTimeout(tick, 1000);” means that the program is pausing for 1,000 milliseconds (i.e., 1 second).
        var time = setTimeout (tick, 1000);
        if (seconds == -1) 
        {
            alert ("Time's up!!!!");
            clearTimeout(time);
            timer.innerHTML="";
        }
    }

    tick();
}

/*SLIDESHOW CHALLENGE */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


/*To display an automatic slideshow */
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
