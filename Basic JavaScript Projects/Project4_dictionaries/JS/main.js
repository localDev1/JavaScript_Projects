
/*FUNCTION Dictionary*/
function my_Dictionary() 
{
    //Creating dictionary
    var Vehicle = {
        model: "beetle",
        year: "2004",
        brand: "VW",
        dimension: "familiar",
        engine:"gas",
        engine:"elec"
    };
    //Delete a value from dictionary
    delete Vehicle.brand;
    //USing the getElementById to call this function in the HTML code using id demo
    document.getElementById("Dictionary").innerHTML = Vehicle.brand ;
}

