//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are the variables that I'm creating for this project


//These are the functions that I'm creating for this project

//The following function checks to make sure that each field on the form contains some content before allowing a Submit
function validateForm() {
    var FormReady = true;
    let x = document.forms["myForm"]["fname"];
    let y = document.forms["myForm"]["lname"];
    let z = document.forms["myForm"]["phone"];
    let FormFields = [x, y, z];
    for (let i = 0; i <= FormFields.length - 1; i++) {
        if (FormFields[i].value == "") {
            FormFields[i].setAttribute("class", "field-error");
            FormReady = false;
        }
        else {
            FormFields[i].removeAttribute("class", "field-error");
        }
    }
    return FormReady;
}

//This is the script where my statements are executed
window.alert(A); 