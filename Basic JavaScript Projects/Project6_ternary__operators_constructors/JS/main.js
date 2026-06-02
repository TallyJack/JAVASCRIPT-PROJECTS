//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are the functions that I'm creating for this project
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to" : "You can";
    document.getElementById("Vote").innerHTML = Can_vote + " vote.";
}


//This is the script where my statements are executed
window.alert(A); 