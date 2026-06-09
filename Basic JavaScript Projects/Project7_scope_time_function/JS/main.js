//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are the VARS that I'm creating for this project
var GlobalX = 42

//These are the functions that I'm creating for this project

//The following 2 functions showcase the issue with calling a varibale that was defined locally, but in a different function than the one calling it.
function globVloc1() {
    var LocalY = 8
    document.getElementById("gvlAnswer1").innerHTML = GlobalX + LocalY
}

function globVloc2() {//Note that LocalY is not defined in this one, but is called nonetheless
    document.getElementById("gvlAnswer2").innerHTML = GlobalX + LocalY
}

//The following 2 functions showcase the debugged version of the broken code.

function globVloc3() {
    var LocalY = 10
    document.getElementById("gvlAnswer3").innerHTML = GlobalX + LocalY
}

function globVloc4() {
    var LocalY = 10//Note that LocalY is now defined locally in this function as well as the other one.
    document.getElementById("gvlAnswer4").innerHTML = GlobalX + LocalY
}

//This is the console.log() method being executed as requested to debug the error returned by the undefined local variable
console.log(LocalY);

//The following function(s) use the Date().getHours() method to showcase conditional statements

function amVpm() {
    if (new Date().getHours() < 12) {
        document.getElementById("b4ORafter").innerHTML = "It is BEFORE noon.";
    }
    else {
        document.getElementById("b4ORafter").innerHTML = "It is AFTER noon.";
    }
}

//The following function generates a random number between 1 and 10 and determines if it is even or odd

function evenVodd() {
    const eVo = Math.ceil(Math.random() * 10);
    if (eVo % 2 === 0) {
        document.getElementById("evenOdds").innerHTML =  "The number " + eVo + " is EVEN!";
    }
    else {
        document.getElementById("evenOdds").innerHTML = "The number " + eVo + " is ODD!";
    }
}

//The following function calculates the number of vowels within a given Name value. as collected in the input field.

function vowel_count() {
    const username = document.getElementById("Name").value;
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of username) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    if (count === 1) {
        document.getElementById("NumVow").innerHTML = "There is " + count + " vowel in the name you submitted."
    }

    else if (count > 1) {
        document.getElementById("NumVow").innerHTML = "There are " + count + " vowels in the name you submitted."
    }

    else {
        document.getElementById("NumVow").innerHTML = "The name you submitted contains no vowels."
    }
    
}

//The following function was written as instructed on Step 151

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


//This is the script where my statements are executed
window.alert(A); 