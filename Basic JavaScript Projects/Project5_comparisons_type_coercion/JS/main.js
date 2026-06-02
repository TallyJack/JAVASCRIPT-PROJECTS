//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are variables I'm establishing for the NaN Challenges
var nanSub1 = 42;
var nanSub2 = "The meaning of life...";
var posInf = 2e310
var negInf = -3e309

//This is the script where my statements are executed
window.alert(A); 
document.getElementById("nanTest1").innerHTML = "1. True or False? The following datatype is not a number: " + nanSub1;
document.getElementById("nanTest2").innerHTML = "2. True or False? The following datatype is not a number: " + nanSub2;

//These are the functions that I'm creating for this project
function dtReveal(x) {//This function replaces an element with it's data type
    var DT = typeof document.getElementById(x).innerHTML;
    document.getElementById(x).innerHTML = DT;
}

function sqrtReveal(x) {//This function replaces an element with its squareroot
    var sqrtElement = Math.sqrt(document.getElementById(x).innerHTML);
    document.getElementById(x).innerHTML = sqrtElement;
}

function nanReveal(x, y) {//This function determines the datatype of a value mentioned in an elemnent, and then replaces the element with the name of that datatype.
    document.getElementById(y).innerHTML = isNaN(x);
}

function limReveal(x, y) {//This function answers the question of how JS displays an extremely high or low value.
    document.getElementById(y).innerHTML = "The value returned displays as: " + x;
}

function BoolReveal(x) {//This function enables buttons to reveal the boolean value of the operation they are given
    const strBool = JSON.stringify(x);
    const capBool = strBool.charAt(0).toUpperCase() + strBool.slice(1);
    document.getElementById('BoolTest').innerHTML = "That statement is " + capBool + "!"
}
 


//The following console methods were simply written as instructed to execute a math operation and to return a boolean value of false 
console.log(2+4)
console.log(1<0)