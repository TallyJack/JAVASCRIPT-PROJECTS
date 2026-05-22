//These are the definitions of my VARs
var E = "<br>"
var A = "Testing...Testing...Anyone there?", B = "Welcome to Jack\'s Experiment with using text in JavaScript! <br> \"It's the best language there is!\" - Some people";
var claim = "The best movie of all time is ", subject = "The Cat in Hat (2003).";

var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string";

//This is the script where my statements are executed
window.alert(A); //This is where the window alert displays the greeting
document.write(B+E+E); //This is where the user is welcomed on the page itelf
document.write(claim + subject + E); //This is where an outragoeous claim is made

document.write(100-1); //This is where I begin to double down on that claim. I used two distinct statements as an experiment with syntax
document.write("% of people disagree with me and " + (50 + 50) + "% of those people are incorrect."+E+E);

document.write(Sent1+Sent2); //This is the assignment required on step 65