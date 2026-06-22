//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are the VARS that I'm creating for this project
var coinRuns = 0; //This represents the number of times that the coin flip function has run.
var head_Count = 0;
var tail_Count = 0;
var h_tRatio;
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
    h_tRatio = Number((head_Count / tail_Count).toPrecision(3));
    var Y = "<strong>Attempts: " + coinRuns + E + "Head Count: " + head_Count + E + "Tails Count: " + tail_Count + E + "Heads/Tails Ratio: " + h_tRatio + "</strong>";
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

//The following function creates an array of dates, beginning with today's date, and extending into the past a number of days specified as an argument.
//NOTE: This makes use of FOR loops, Arrays, and hte Let Keyword
function array_Function(d) {
    var today = new Date();
    var Days_Ago = [];
    Days_Ago[0] = today.toDateString();
    var Days_Past = "Today's Date is " + Days_Ago[0] + "!" + E;
    for (let i = 1; i <= d; i++) {
        Days_Ago[i] = new Date(new Date().setDate(today.getDate() - i)).toDateString();
        Days_Past += Days_Ago[i] + " was " + i + " day(s) ago!" + E;
    }
    document.getElementById("daysAgo").innerHTML = Days_Past;
};

//The following funciton displays the properties of the Hero
function constant_function() {
    document.getElementById("Constant").innerHTML = "";
    let Hero = {
        Alias: "Invincible",
        Gender: "Male",
        Name: "Mark Grayson",
        Power: "Strength and Flight",
        Age: 19,
        Colors: "Blue and Yellow"
    };
    for (const [x, y] of Object.entries(Hero)) {
        document.getElementById("Constant").innerHTML += x + ": " + y + E;
    };
};

//The following function makes use of the LET Keyword
function Lettuce(key, value) {
    const setup = "The global variable, '" + key + ",' represents a value of " + value + "."
    document.getElementById("LetsDance").innerHTML = setup;
    {
        let value = -1000000;
        const build = E + "Let's briefly use the 'let' keyword to let '" + key + "' represent a value of " + value + " within the scope of this block."
        document.getElementById("LetsDance").innerHTML += build;
        const inside = E + "If I now add 5000 to that value INSIDE the 'let' block, we get a total of " + (value + 5000) + "."
        document.getElementById("LetsDance").innerHTML += inside;
    }
    const outside = E + "However, if I now add 5000 to that value OUTSIDE the 'let' block, we get a total of " + (value + 5000) + "."
    document.getElementById("LetsDance").innerHTML += outside;

}

//This is the script where my statements are executed
window.alert(A); 