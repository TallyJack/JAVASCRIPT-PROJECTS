//These are definitions for some VARs that I find useful for test projects
var E = "<br>";
var A = "Website Reset";

//These are variables I'm establishing for the NaN Challenges
var nanSub1 = 42;
var nanSub2 = "The meaning of life...";
var posInf = 2e310
var negInf = -3e309

//This last variable is established specifically to ensure that I am determining the datatype of exactly the same datum I am addressing in my prompt
var dtEX2 = 67

//This is the script where my statements are executed
window.alert(A); //Note that this alert allows the user to see that three of the prompts are populating via JS.
//These three paragraph elements are being defined differently (via JS) since I want to ensure JS is assessing the datatype of the same exact variable that was used to write the prompt.
document.getElementById("dataTypeExample2").innerHTML = "Click below to see what kind of data is between these brackets: [" + dtEX2 + "]" + E + "<strong>Warning:</strong> The button below will overwrite the whole page, so save this one for last!";
document.getElementById("nanTest1").innerHTML = "1. True or False? The following datatype is not a number: " + nanSub1;
document.getElementById("nanTest2").innerHTML = "2. True or False? The following datatype is not a number: " + nanSub2;

//These are the functions that I'm creating for this project

function dtReveal(x) {//This function replaces an element with it's data type
    var DT = typeof document.getElementById(x).innerHTML;
    document.getElementById(x).innerHTML = DT;
}

function dtReveal2() {//This function is a late addition to the file that overwrites the page and offers an explanation as to why is behaves differently than the functions of all the other buttons
    var DT2 = typeof dtEX2;
    document.write("The datatype of " + dtEX2 + " is: " + DT2 + "!" + E + E )
    document.write("Q: \"Why did this button behave differently than all the others and overwrite the page?\"" + E);
    document.write("<strong>A: This question was the last one I added to the page because I didn't realize that I'd be required to use the document.write method until the 'Submit' step of the assignment.</strong>" + E + E);
    document.write("Refresh the page to return to the other questions.")
}

function sqrtReveal(x) {//This function replaces an element with its squareroot (but it is being used to return a NaN response)
    var sqrtElement = Math.sqrt(document.getElementById(x).innerHTML);
    document.getElementById(x).innerHTML = sqrtElement;
}

function nanReveal(x, y) {//This function determines the datatype of a value mentioned in an elemnent, and then replaces the element with the name of that datatype.
    //The following two lines are simply capitalizing the True/False answer we are returning
    const strTF = JSON.stringify(isNaN(x));
    const capTF = strTF.charAt(0).toUpperCase() + strTF.slice(1);

    document.getElementById(y).innerHTML = capTF;
}

function limReveal(x, y) {//This function answers the question of how JS displays an extremely high or low value.
    document.getElementById(y).innerHTML = "The value returned displays as: " + x;
}

//This function enables buttons to reveal the boolean value of the operation they are given, as well as the inverse of that boolean value
function BoolReveal(x) {
    //The following two lines turn the boolean value into a string and so that it can then be capitalized
    const strBool = JSON.stringify(x); 
    const capBool = strBool.charAt(0).toUpperCase() + strBool.slice(1);
    
    //The following two lines do the same thing to the opposite of the returned boolean value by using the NOT operator
    const notStrBool = JSON.stringify(!x);
    const notCapBool = notStrBool.charAt(0).toUpperCase() + notStrBool.slice(1);

    //The line below replaces the element with 2 lines of text, stating the Boolean value returned by the user's selection, and the inverse of that Boolean value
    document.getElementById('BoolTest').innerHTML = "That statement is " + capBool + "!" + E + E + "Therefore, that statement is NOT " + notCapBool + "!"
}
 


//The following console methods were simply written as instructed to execute a math operation and to return a boolean value of false 
console.log(2+4)
console.log(1<0)