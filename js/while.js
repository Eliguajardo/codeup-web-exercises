alert("Here is while");

var value = 2;

while (value < 65537) {
    console.log(value);
    value = value *2;
}

// This is how you get a random number between 50 and 100
var totalCones = Math.ceil(Math.random() * (100 - 50) + 50);
console.log("Total to be sold " + totalCones);

let total = 0;

do {
    let bought = Math.ceil(Math.random() * (5 - 1) + 1);

    if  (total + bought > totalCones) {
        continue;
    }
}
    total = total + bought;
    console.log("customer bought: " + bought);
    console.log("Total Sold: " + total);
} while (total < totalCones);



