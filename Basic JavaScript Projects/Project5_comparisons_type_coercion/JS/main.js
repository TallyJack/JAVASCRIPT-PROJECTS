//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//Script written for this project
document.write(typeof "a");


//These are the functions that I'm creating for this project


//LEGACY FUNCTIONS
function hero_traits() {
    var Invincible = {//This is a dictionary containing various traits of a fictional superhero
        Gender: "Male",
        realName: "Mark Grayson",
        Power: "Strength and Flight",
        Age: 19,
        Colors: "blue and yellow"
    };
    delete Invincible.realName;//This deletes the trait that will be called upon in the following line
    document.getElementById("Dictionary").innerHTML = Invincible.realName;//This calls the deleted trait
}

//This is the script where my statements are executed
window.alert(A); 