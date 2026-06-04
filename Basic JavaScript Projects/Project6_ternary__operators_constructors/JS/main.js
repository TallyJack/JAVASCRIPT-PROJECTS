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

//The following "new" keyword and function were written as per Step 135
var Sawyer = new Vehicle("Toyota", "Prius", 1997, "Hot Pink");

function myFunction2() {
    document.getElementById("New_and_This").innerHTML = "Sawyer drives a " + Sawyer.Vehicle_Color + "-colored " + Sawyer.Vehicle_Model + " manufactured by " + Sawyer.Vehicle_Make + " in " + Sawyer.Vehicle_Year;
}

//The following was written to make a nested function that lists off perfect squares, starting off with 1.

var begbase = 1;//This variable defines the initial value we use to calculate each successive square number
const SquareArray = [begbase];//This defines the array in which we will list off each square, starting with the initial value.

function countBySquares(){//Defines funciton that lists perfect squares
    document.getElementById("Nested_Function").innerHTML = SquareArray;//Displays the current array containing only the values already contained within it
    function cbs2a(){//Defines the funciton that returns the value collected in the function enclosed in it (This function is superfluous and could simply include the operations alone but still entertains the nested function exercise)
        function cbs2b (){//Defines the function that increments the value already defined outside the nested function
            begbase += 1;
        }
        cbs2b();
        return begbase;
    }
    const currVal = cbs2a();//Temporarily defines the current value of the variable outside this function as a constant for the runtime of this function.
    const nexsqre = (currVal)**2;//Defines the next perfect square based on the current base value on this particular runtime of the function
    SquareArray.push(nexsqre);//Adds the latest perfect square to the running list so that it will be included on the next execution of the funciton.
}

//This is the script where my statements are executed
window.alert(A); 