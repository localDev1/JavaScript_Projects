
/*SWITCH STATEMENT ASSIGNMENT*/
//food function ,......selecting one food
function foodFunction() 
{
    var favoriteFood;
    var foodSelected = document.getElementById("Selected").value;
    var text = " is your favorite food";

    switch (foodSelected)
    {
        case "Mole":
            favoriteFood = "Mole" + text;
        break;
        case "Quesadillas":
            favoriteFood = "Quesadillas" + text;
        break;
        case "Pozole":
            favoriteFood = "Pozole" + text;
        break;
        case "Carnitas":
            favoriteFood = "Carnitas" + text;
        break;
        case "Tacos":
            favoriteFood = "Tacos" + text;
        break;
        case "Tortas":
            favoriteFood = "Tortas" + text;
        break;
        default:
        favoriteFood = "Pleaser enter a food exactly as written on the list";
    }

   document.getElementById("favoriteFood").innerHTML = favoriteFood;

}

/*GETELEMENTSBYCLASSNAME() METHOD*/
function changeFunction()
{
    //Getting the object by the class name
    var text = document.getElementsByClassName("Change");
    //changing the text
    text[0].innerHTML = "New text !!!!!!!";
   
}
//CANVAS CHALLENGE
//function to draw a circle
function drawFunction()
{
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");
    
    //creating a gradient 
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 480, 255);    

    //creating the circle   
    ctx.beginPath();    
    ctx.arc(250,150,80,0,2*Math.PI);
    ctx.stroke();

}

