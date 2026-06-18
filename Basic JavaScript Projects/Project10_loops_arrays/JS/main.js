//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are the VARS that I'm creating for this project
var coinRuns = 0; //This represents the number of times that the coin flip function has run.
var head_Count = 0;
var tail_Count = 0;
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var I;

//These are the functions that I'm creating for this project

//The following function uses a while loop to 
function Call_Loop() {
    var N = "";
    var X = 1;
    coinRuns++;
    var isHeads = Math.random() >= 0.5;
    while (isHeads) {
        head_Count++;
        N += E + X + ". Heads!";
        X++;
        isHeads = Math.random() >= 0.5;
    }
    tail_Count++;
    N += E + X + ". Tails!";
    var Y = "<strong>Attempts: " + coinRuns + E + "Head Count: " + head_Count + E + "Tails Count: " + tail_Count + E + "Heads/Tails Ratio: " + (head_Count/tail_Count).toPrecision(3) + "</strong>";
    document.getElementById("Loop").innerHTML = Y + N;

}

//The following function uses a for loop to display a list of the instruments included in the array.
function for_Loop() {
    var content1 = "";
    for (I = 0; I < Instruments.length; I++) {
        
        content1 += (I + 1) + ". " + Instruments[I] + E;
    }
    document.getElementById("List_of_Instruments").innerHTML = content1;
}

//The following function creates an array and calls one of its objects.
function array_Function(d) {
    var today = new Date();
    var Days_Ago = [];
    Days_Ago[0] = today.toDateString();
    Days_Ago[1] = new Date(new Date().setDate(today.getDate() - 1)).toDateString();
    Days_Ago[2] = new Date(new Date().setDate(today.getDate() - 2)).toDateString();
    Days_Ago[3] = new Date(new Date().setDate(today.getDate() - 3)).toDateString();
    Days_Ago[4] = new Date(new Date().setDate(today.getDate() - 4)).toDateString();
    Days_Ago[5] = new Date(new Date().setDate(today.getDate() - 5)).toDateString();
    Days_Ago[6] = new Date(new Date().setDate(today.getDate() - 6)).toDateString();
    Days_Ago[7] = new Date(new Date().setDate(today.getDate() - 7)).toDateString();
    var Days_Past = "Today's Date is " + Days_Ago[0] +"!" + E;
    for (let i = 1; i <= d; i++) {
        
        Days_Past += Days_Ago[i] + " was " + i + " day(s) ago!" + E;
    }
    document.getElementById("daysAgo").innerHTML = Days_Past;
} 

//This is the script where my statements are executed
window.alert(A); 