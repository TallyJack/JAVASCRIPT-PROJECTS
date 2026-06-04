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

//This is the script where my statements are executed
window.alert(A); 