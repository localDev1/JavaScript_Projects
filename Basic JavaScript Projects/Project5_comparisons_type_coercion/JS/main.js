
/*TYPE OF OPERATOR ASSIGNMENT*/
function typeOp(){
    var x= document.write(typeof "hello");
    document.getElementById("type").innerHTML = "the typeof \" hello\" is  " + x;
}

/*TYPE COERCION ASSIGNMENT*/
function coercionOp(){
    var x= "10"+ 10;
    document.getElementById("coercion").innerHTML = "the coercion between " + "\"10\"" + "and " + "10"+ " is : " + x;
}

/*NAN CHALLENGE*/
function nanOp()
{
    document.getElementById("test").innerHTML = 0/0;
}

/*NAN CHALLENGE true*/
function isNanOpT()
{
    document.getElementById("nantrue").innerHTML = isNaN("Hello World");
}

/*NAN CHALLENGE false*/
function isNanOpF()
{
    document.getElementById("nanfalse").innerHTML = isNaN(100);
}

/*INFINITY ASSIGNMENT*/
function infinityPos()
{
    var x= (3E500);
    document.getElementById("infpos").innerHTML = x;
}

function infinityNeg()
{
    var x= (-3E500);
    document.getElementById("infneg").innerHTML = x;
}


/*BOOLEAN ASSIGNMENT */
function comparationOp()
{
    var x=100, y=50;
    document.getElementById("comparation").innerHTML = x + " is bigger than "+ y +"??? "+ (x>y);
}

/* CONSOLE.LOG ASSIGNMENT */
function consoleOp()
{
    var x=100, y=50;
    //document.getElementById("cons").innerHTML = "the sum of the numbers "+ x +"\+ "+ y + " see the console";
    document.getElementById("cons").innerHTML =  " to view the results open the Console with Dev Tools ";
    console.log(x+y);
    console.log(x<y);
}

/*DOUBLE EQUAL SIGNS ASSIGNMENT*/
function equalOpFalse()
{
    var x=100, y=50, z=50;
    document.getElementById("equal1").innerHTML = x + " is equal to "+ y +"??? "+ (x==y);
   
}

/*DOUBLE EQUAL SIGNS ASSIGNMENT*/
function equalOpTrue()
{
    var x=100, y=50, z=50;
    
    document.getElementById("equal2").innerHTML = y + " is equal to "+ z +"??? "+ (y==z);
}

/*TRIPLE EQUAL SIGNS ASSIGNMENT*/
function equal1Op()
{
    /**Return true by ensuring to match the data type and value. */
    var x=100, y=100;
    document.getElementById("equal31").innerHTML = x + " is equal to "+ y +"??? "+ (x===y);
   
}

function equal2Op()
{
    /*Return false by writing a different data type and different value.*/
    var x="hola", y=100;
    document.getElementById("equal32").innerHTML = x + " is equal to "+ y +"??? "+ (x===y);
   
}

function equal3Op()
{
    /*Return false by writing a different data type but the same value for both..*/
    var x="100", y=100;
    document.getElementById("equal33").innerHTML = "\""+ x + "\"" + " is equal to "+ y +"??? "+ (x===y);
   
}

function equal4Op()
{
    /*Return false by writing the same data type but a different value for both.*/
    var x=10, y=100;
    document.getElementById("equal34").innerHTML = x + " is equal to "+ y +"??? "+ (x===y);
   
}

/*AND OR OPERATORS ASSIGNMENT */
function andOpF()
{
    /*Return false by using AND operator */    
    document.getElementById("andfalse").innerHTML = (10>100 && 10<50);
   
}

function andOpT()
{
    /*Return true by using AND operator */    
    document.getElementById("andtrue").innerHTML = (10<100 && 10<50);
   
}

function orOpF()
{
    /*Return false by using OR operator */    
    document.getElementById("orfalse").innerHTML = (10>100 || 10>50);
   
}

function orOpT()
{
    /*Return True by using OR operator */    
    document.getElementById("ortrue").innerHTML = (10<100 || 10>50);
   
}


/**NOT OPERATOR ASSIGNMENT */

function notOpT()
{
    /*Return True by using NOT operator */    
    document.getElementById("nottrue").innerHTML = !(10>50);
   
}

function notOpF()
{
    /*Return false by using NOT operator */    
    document.getElementById("notfalse").innerHTML = !(10<50);
   
}



