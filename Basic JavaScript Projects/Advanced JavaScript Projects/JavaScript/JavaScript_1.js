//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are the variables that I'm creating for this project
const C1 = document.getElementById("sect2canva");//Canvas in Section 2

const C1_CrissCross = C1.getContext("2d"); //Forms an X and a cross over the canvas

//The 4 below form the diagonal
C1_CrissCross.moveTo(0,0);
C1_CrissCross.lineTo(500, 250);
C1_CrissCross.moveTo(500, 0);
C1_CrissCross.lineTo(0, 250);

//The 4 below form the cross
C1_CrissCross.moveTo(250, 0);
C1_CrissCross.lineTo(250, 250);
C1_CrissCross.moveTo(0, 125);
C1_CrissCross.lineTo(500, 125);

//These color, thicken, and execute the stroke
C1_CrissCross.strokeStyle = "red";
C1_CrissCross.lineWidth = 10;
C1_CrissCross.stroke();

//These are the functions that I'm creating for this project
function Hero_Function() {
    var Hero_Output;
    var Hero = document.getElementById("Hero_Input").value;
    var Hero_String = " is your favorite Hero!";

    //This was added to make use of the getElementsByClassName() method required on Step 239
    const JL = document.getElementsByClassName("JusticeLeague");
    for (let i=0; i<=(JL.length - 1); i++) {
        JL[i].innerHTML = JL[i].innerHTML.split(" ")[0];

        if(JL[i].innerHTML == Hero) {
            JL[i].innerHTML += " rules!";
        }
        else {
            JL[i].innerHTML += " drools...";
        }
    }



    switch (Hero) {
        case "Superman":
            Hero_Output = "Superman" + Hero_String;
            break;
        case "Batman":
            Hero_Output = "Batman" + Hero_String;
            break;
        case "Aquaman":
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