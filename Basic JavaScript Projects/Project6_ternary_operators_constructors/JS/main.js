
/*FUNCTION ASSIGNMENT*/
function Ride_Function() 
{
    //Creating two variables 
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short ":"Yor are tall enough";
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

/* TERNARY OPERATORS CHALLENGE */

function Vote_Function() 
{
    //Creating two variables 
    var age, Can_vote;
    age = document.getElementById("ageid").value;
    Can_vote = (age < 18) ? "You are not old enough to vote ":"You can vote! ";
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("vote").innerHTML = Can_vote;
}

/*CODING ASSIGNMENT*/
function Vehicle(Make, Model, Year, Color)
{
    this.Vehicle_Make =Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year =Year;
    this.Vehicle_Color =Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() 
{
    
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a "+
    Erik.Vehicle_Color+ "-Colored "+ Erik.Vehicle_Model+" manufactured in "+Erik.Vehicle_Year;
}

/*NEW KEYWORD ASSIGNMENT*/
function myNewKeyword() 
{
    var Fernando = new Vehicle("VW", "Golf", 2004, "Silver");
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("New_Keyword").innerHTML = "Fernando drives a "+
    Fernando.Vehicle_Color+ "-Colored "+ Fernando.Vehicle_Model+" manufactured in "+Fernando.Vehicle_Year;
}

/*RESERVED KEYWORD CHALLENGE*/

function Person(first, last, age, eye) 
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

function personF(){
    /*Assign a variable the value of a reserved "new" word*/
    var myFather = new Person("John", "hola", 50, "blue");
    document.getElementById("father").innerHTML = "My father is " + myFather.age + "."; 
}

/*NESTED FUNCTIONS ASSIGNMENT*/
function nameFunction()
{
    document.getElementById("completename").innerHTML = CompleteName();

    function CompleteName ()
    {
        var FName = "Fernando";
        function lastName ()
        {
            FName += " Perez";
        }
        lastName();
        return FName;
    }

}