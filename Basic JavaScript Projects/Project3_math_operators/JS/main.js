//These are the definitions of my VARs
var E = "<br>";
var A = "Website Reset";

//This is where my functions are defined

function addNums() { //This function returns the solution to the addition question as a string
    var addition = 3 + 3;
    document.getElementById("Math1").innerHTML = "3 + 3 is " + addition;
}

function subNums() { //This function returns the solution to the subtraction question as a string
    var subtraction = 12 - 8;
    document.getElementById("Math2").innerHTML = "12 - 8 is " + subtraction;
}

//This is the script where my statements are executed
window.alert(A); 