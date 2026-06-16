//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are the VARS that I'm creating for this project
var coinRuns = 0; //This represents the number of times that the coin flip function has run.

//These are the functions that I'm creating for this project

//The following function uses a while loop to 
function Call_Loop() {
    var N = "";
    var X = 1;
    coinRuns++;
    var Y = "<strong>Attempts: </strong>" + coinRuns;
    var isHeads = Math.random() >= 0.5;
    while (isHeads) {
        N += E + X + ". Heads!";
        X++;
        isHeads = Math.random() >= 0.5;
    }
    N += E + X + ". Tails!";
    document.getElementById("Loop").innerHTML = Y + N;

}


//This is the script where my statements are executed
window.alert(A); 