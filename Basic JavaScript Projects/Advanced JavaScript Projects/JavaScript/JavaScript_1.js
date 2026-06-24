//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are the VARS that I'm creating for this project

//These are the functions that I'm creating for this project
function Hero_Function() {
    var Hero_Output;
    var Hero = document.getElementById("Hero_Input").value;
    var Hero_String = " is your favorite Hero!";
    switch(Hero) {
        case "Superman":
            Hero_Output = "Superman" + Hero_String;
        break;
        case "Superman":
            Hero_Output = "Batman" + Hero_String;
        break;
        case "Superman":
            Hero_Output = "Aquaman" + Hero_String;
        break;
        case "Wonder Woman":
            Hero_Output = "wonder Woman" + Hero_String;
        break;
        case "Cyborg":
            Hero_Output = "Cyborg" + Hero_String;
        break;
        case "Flash":
            Hero_Output = "Flash" + Hero_String;
        break;
        default:
            Hero_Output = "Please enter the name of one the heroes exactly as written in the list above.";

    }
    document.getElementById("Hero_Output").innerHTML = Hero_Output;
}

//This is the script where my statements are executed
window.alert(A); 