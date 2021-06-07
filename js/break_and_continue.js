'use strict';

while (true) {
    let odd_Number = prompt("Enter a odd number between 1 and 50");
    if ((odd_Number != 1) || (odd_Number <= 50)){
        if (odd_Number % 2 == 0){
            break;
        }
    }
}


alert(odd_Number);
