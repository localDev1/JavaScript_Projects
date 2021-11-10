
/*LOOPS ASSIGNMENT*/
function Call_Loop() 
{
    //Creating two variables 
    var x = 1;
    var count="";
    while (x<11)
    {
        count += "<br>"+x;
        //increase the value in one
        x++;
    }
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("Loop").innerHTML = count;
}

/*LENGTH PROPERTY CHALLENGE*/
function lengthFunction()
{
    //variable
    var x = "Hello Portland!!!!!";
    //he length property returns the length of a string
    document.getElementById("Length").innerHTML = "the length of the text : "+ x + " is :"+ x.length;;
}


/*LOOPS ASSIGNMENT*/
function for_Loop() 
{
    //Creating the array
    var arrayList = ["Banjo","Guitar","Piano","Cello","Flute","Drum","Trumpet","Sax","Violin","Tuba"];
    //counter
    var x;
    var instrument="";
    for (x=0 ; x < arrayList.length; x++)
    {
         //concatenating members of the array
        instrument += x + " :  "+ arrayList[x] + "<br>"
    }
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("List_of_Instruments").innerHTML = instrument;
}

/*LOOPS ASSIGNMENT*/
function array_Function() 
{
    //Creating the array
    var arrayList = [];
    //filling the array
    arrayList[0]= "Banjo";
    arrayList[1]="Guitar";
    arrayList[2]="Piano";
    arrayList[3]="Cello";
    arrayList[4]="Flute";
    arrayList[5]="Drum";
    arrayList[6]="Trumpet";
    arrayList[7]="Sax";
        //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("Array").innerHTML = "My favorite instruments are: " + arrayList[2]+ " and "+ arrayList[7];
}

/*CONST KEYWORD ASSIGNMENT*/
function constant_Function()
{
    //creating the const 
    const Vehicles = { model:"Golf", year:"2007", color:"silver"};
    //changing values and adding a property with con value
    Vehicles.brand = "VW";
    Vehicles.year = "2004";
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("Constant").innerHTML = "The brand of my car is: " + Vehicles.brand + " and the year is "+ Vehicles.year;
}

/*LET KEYWORD ASSIGNMENT*/
function letFunction()
{
    //declaring a let keyword
    let x= "this is a \"let\" keyword";
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("Let").innerHTML = x;
}

/*RETURN STATEMENT CHALLENGE*/
function returnFunction()
{
    //declaring a let keyword
    let x= "We are using the return ";
    x+= "concatening two sentences";
    //USing the getElementById to call this function in the HTML code using id demo
    return x;
}
//getting return value from returnFunction
document.getElementById("Return").innerHTML = returnFunction();

/*OBJECT ASSIGNMENT*/
function objectFunction()
{
    //creating  an object using the let keyword.
    let Vehicles = { 
                    model:"Golf", 
                    year:"2004",
                     color:"silver",
                     //method inside object
                    Vehicle_data: function()
                    {
                        return "The Fernando's car is a "+this.model+ " " +this.year +"   " + this.color +" color ";
                    }
                };

    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("VehicleData").innerHTML = Vehicles.Vehicle_data();
   
}

/*BREAK AND CONTINUE CHALLENGE*/
//break statement
function breakFunction()
{
    let text = "";
    let i=0;
    //loop that includes at least one break statement.
    for (i = 0; i < 10; i++)
    {
        if (i === 5) 
        { 
            // break statement.
            break;
        }
        text += "The number is " + i + "<br>";
    }
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("Break").innerHTML = text;
}

//continue statement
function continueFunction()
{
    let text = "";
    let i=0;
    //loop that includes at least one continue statement.
    for (i = 0; i < 10; i++)
    {
        if (i === 5) 
        { 
            // break statement.
            continue;
        }
        text += "The number is " + i + "<br>";
    }
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("Continue").innerHTML = text;
}

