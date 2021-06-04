

var notDone = true; // loop

while (notDone) {
    //do something
    notDone = confirm("Do you want to go again");
}


var notDone = true;

do{
    /// do stuff
    alert("Doing stuff");
    notDone = confirm("Again");
}while (notDone);


var badData = false;

function validateNumber() {
    var value = Prompt("Enter a number");
    badData = typeof(value) != "number"
    while(!badData);
    return value;
}
