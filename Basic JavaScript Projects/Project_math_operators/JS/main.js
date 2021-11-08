
/*FUNCTION of an addition operation*/

function Add(x,y)
{
    var z=x+y;   
    document.getElementById("Math").innerHTML = "the result of the sum "+x +" \+ "+y+ "  is : " + z;
}

/*FUNCTION of an subtraction operation*/
function Subtraction(x,y)
{
    var z=x-y;   
    document.getElementById("subtract").innerHTML = "the result of the subtraction "+x +" \- "+y+ "  is : " + z;
}

/*FUNCTION of an Multiplication and division operations*/
function multiDiv(x,y)
{
    var z=x*y;   
    document.getElementById("multi").innerHTML = "the result of the mutltiplication "+x +" \* "+y+ "  is : " + z;
    var a=x/y;   
    document.getElementById("div").innerHTML = "the result of the division is "+x +" \\ "+y+ "  is : " + a;
}

/*FUNCTION of multiple mathematical operations*/
function operations()
{
    var z=((20*5)/4+(15-5))*2   
    document.getElementById("ops").innerHTML = "the result of the operations is : " + z;
   
}

/*FUNCTION of the modulus operator*/
function modOperator(x,y)
{
    var z=x%y;   
    document.getElementById("modulus").innerHTML = "the modulus of the division of "+x +" \\ "+y+ "  is : " + z;
   
}

/*FUNCTION of the negation operator*/
function negativeOp(x)
{
       
    document.getElementById("negative").innerHTML = "the negative number of "+ x +"  is : " + -x;
   
}

/*FUNCTION of the increment operator and the decrement operator*/
function incDecOp()
{
    a=100;
    a++;

    b=100;
    b--;
    
    document.getElementById("incdec").innerHTML = "the increment of 100 is : "+ a +" and the decrement is : "+b;
   
}

/*FUNCTION of the random operator*/
function randomOp()
{
     var x= Math.random();
    document.getElementById("random").innerHTML = "the random number is : "+ x;
   
}

/*FUNCTION of the Math operator*/
function mathOp(x)
{
     var y= Math.sqrt(x);
    document.getElementById("mathope").innerHTML = "the square root of : "+ x + " is : "+ y;
   
}





