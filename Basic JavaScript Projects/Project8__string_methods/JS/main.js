//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are the VARS that I'm creating for this project

//These are the functions that I'm creating for this project

//The following function defines variables as parts of a string, combines them, and displays them.
function Complete_sent() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("ComboSent").innerHTML = "<strong>Result:</strong> " + whole_sentence;
}

//The following function extracts a section of a string.
function Slice_N_Dice() {
    var sentence = document.getElementById("subject_slice").innerHTML;
    var section_1 = sentence.slice(26, 29);
    var section_2 = sentence.slice(31, 35);
    var section_3 = sentence.slice(40, 45);
    document.getElementById("sliceable1").innerHTML = section_1;
    document.getElementById("sliceable2").innerHTML = section_2;
    document.getElementById("sliceable3").innerHTML = section_3;
}

//This is the script where my statements are executed
window.alert(A); 