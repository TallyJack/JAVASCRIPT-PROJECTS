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

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//The following "new" keyword was written as per Step 135
var Sawyer = new Vehicle("Toyota", "Prius", 1997, "Hot Pink");

function myFunction2() {
    document.getElementById("New_and_This").innerHTML = "Sawyer drives a " + Sawyer.Vehicle_Color + "-colored " + Sawyer.Vehicle_Model + " manufactured by " + Sawyer.Vehicle_Make + " in " + Sawyer.Vehicle_Year;
}

//This is the script where my statements are executed
window.alert(A); 