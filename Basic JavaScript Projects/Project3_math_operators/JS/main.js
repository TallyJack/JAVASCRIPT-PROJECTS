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

function multNums() { //This function returns the solution to the multiplication question as a string
    var multiplication = 5 * 5;
    document.getElementById("Math3").innerHTML = "5 x 5 is " + multiplication;
}

function divNums() { //This function returns the solution to the division question as a string
    var quotient = 63 / 7;
    document.getElementById("Math4").innerHTML = "63 / 7 is " + quotient;
}

function comboNums() { //This function returns the solution to this combined operation question as a string
    var solution = (5 * 7 + 9) / 4 - 8;
    document.getElementById("Math5").innerHTML = "5 multiplied by 7, plus 9, divided by 4, subtracted by 8 equals " + solution;
}

function remNums() { //This function returns the remainder for the division question as a string
    var remainder = 29 % 7;
    document.getElementById("Math6").innerHTML = "When you divide 29 by 7, the remainder is " + remainder;
}

//This is the script where my statements are executed
window.alert(A); 