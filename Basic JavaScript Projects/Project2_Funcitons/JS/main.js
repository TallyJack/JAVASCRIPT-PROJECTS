//These are the definitions of my VARs
var E = "<br>";
var A = "Website Reset";

//This is where my functions are defined

function Display_Text_on_Push() { //This funciton changes the string values on both the text within the button and the text within the paragraph text that will display beneath it
    var V1 = "I've Been Written!";
    var V2 = "I've Been Clicked!";
    document.getElementById("method_text").innerHTML = V1;
    document.getElementById("Button_Text").innerHTML = V2;
}

function Concatenate_Strick_on_Push() { //This function adds more clauses to the existing paragraph text on the page
    var N1 = ", and here's another"
    document.getElementById("concat").innerHTML+=N1 
}

//This is the script where my statements are executed
window.alert(A); //This simply helps indicate that the website has been refreshed