'use strict';

var oddNumber;

while(true) {
    oddNumber = parseInt(prompt("Enter an odd number 1 and 50"));
     if (oddNumber % 2 != 0) {
    break;
 }
} console.log("Number to skip is: " + oddNumber)


for (let index = 0; index < 50; index++) {
     if (index == oddNumber) {
console.log("Yikes! Skipping number " + index);
 continue
 }
    if (index % 2 !=0) {
 console.log("Here is an odd number: " + index);
     }
}



