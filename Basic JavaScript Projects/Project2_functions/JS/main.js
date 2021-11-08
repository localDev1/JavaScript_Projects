
/*FUNCTION ASSIGNMENT*/
function displayDate() 
{
    //Creating two variables 
    var x = "the time is: ", y="  PERFECT FOR RUNNIG!!!"

    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("demo").innerHTML = x + Date()+ y;
}


/*    += OPERATOR ASSIGNMENT */

function operator() 
{
    //Creating a variable using the += operator
    var x = "My name is: ";
    x +="  Fernando Perez Roblero"
    //USing the getElementById to call this function in the HTML code using id name
    document.getElementById("name").innerHTML = x;
}

/*FUNCTION CHALLENGE*/

function Multiply(x,y)
{
    var z=x*y;
    return z;
}