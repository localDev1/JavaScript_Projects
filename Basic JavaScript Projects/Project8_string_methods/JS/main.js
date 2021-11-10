


/*CONCAT() METHOD ASSIGNMENT*/
function concatFunction() 
{
   var x = "My name is ";
   var y ="Fernando ";
   var z= "Perez ";
   var p = "Roblero";

    //Displaying concatenated string
    document.getElementById("concatenate").innerHTML = x.concat(y,z,p);
}

/*SLICE() METHOD*/
function sliceFunction()
{
    var sentence = "Hello my name is Fernando";
    var section = sentence.slice(17,25);
    document.getElementById("Slice").innerHTML = section;
}


/*function with an toUpperCase() method */
function upperFunction()
{
    //creating variable    
    var sentence = "Hello World!";
    //Using the toUpperCase() method
    var result = sentence.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}


/*function with an search()  method */
function searchFunction()
{
    //creating variable
    var text = "Hello Tech Academy!!!"; 
    //Using the search method
    document.getElementById("Search").innerHTML = text.search("Tech");
}

/* NUMBER METHODS ASSIGNMENT */
/*function with an toString() method */
function stringFunction()
{
    //creating variable
    var number = 100; 
    //Using the toString method
    document.getElementById("ToString").innerHTML = number.toString();
}


/* TOPRECISION() METHOD ASSIGNMENT */
/*function with an toPrecision() method */
function precisionFunction()
{
    //creating variable
    var number = 3.14159416653238474; 
    //Using the precision method
    document.getElementById("Precision").innerHTML = number.toPrecision(7);
}


/* NEW METHODS CHALLENGE */

/*function with an toFixed() method. */
function fixedFunction()
{
    //creating variable
    var number = 3.14159416653238474; 
    //Using the fixed method
    document.getElementById("Fixed").innerHTML = number.toFixed(4);
}

/*function with an valueOf() method. */
function valueOfFunction()
{
    //creating variable
    var number = 3.14159416653238474; 
    //Using the valueOf method
    document.getElementById("ValueOf").innerHTML = number.valueOf();
}

