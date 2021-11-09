
//Creating  global variable
var x = 50;

/*FUNCTION ASSIGNMENT*/
function globalF() 
{
    //Creating  local variable
    var y=50;
    //Displaying value
    document.write(x + y + "<br>");
}

/*function with an error in it and use console.log() method to debug it*/
function localF()
{
    console.log(y+30);
}

/*function with an if statement that utilizes the new Date().getHours() method */
function DateFunction()
{
    if (new Date().getHours() > 10) 
    {
        document.getElementById("night").innerHTML = "Good Day Everbody!!!";
    }
}


/*IF STATEMENT ASSIGNMENT */
function myOwnIf(x,y)
{
    if (x>y)
    {
        document.getElementById("comparation").innerHTML = x + " is bigger than " + y;
    }
}


/*ELSE ASSIGNMENT */
function compare2Numbers()
{
 
   var x = parseInt(document.getElementById("value1").value);
   var y = parseInt(document.getElementById("value2").value);
    
    if (x>y)
    {
        comparation = x + " is bigger than " + y;
    }
    else 
    {
        comparation = y + " is bigger than " + x;
    }

    document.getElementById("big").innerHTML = comparation;
}

/*ELSE IF STATEMENTS */
function Time_function()
{
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0)
    {
        reply="It is morning time!";
    }
    else if (time >= 12 == time < 18)
    {
        reply= "It is afternoon";
    }
    else
    {
        reply= "It is evening time";
    }

    document.getElementById("Time_of_day").innerHTML = reply;
}






