// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(value){
    if (value === "string"){
        return value.length
    }

}







// TODO: Add validation to function above, if the argument pass is not a string it should return false.


// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]

function capitalizeAllNames(str){
   if (str = ["bob", "seth","eli"]){
       return str.toUpperCase(["bob", "seth","eli"])
   }
}

// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter('string'));


// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"

    var personOne = {
        firstName: "silvia",
        lastName: "floopertan",
        ageInYears: 34,
        heightInInches: 65,
        getFullName: function(){
            return this.firstName + " " + this.lastName
        }
}





// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"

function getNicelyFormattedFullName(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();

}

var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73
}
personTwo.getNicelyFomattedFullName = function(){
     ${formatName(this.firstName)} ${formatName(this.lastName)}
}

// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"


var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}

personThree.info = function(){

}

// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]

function arrayOfStringsToObjects (input, field) {
    var arrayObjects = [];

    for (var i=0; i < arrayStrings.length ; ++i){
        arrayobjects.push({originalString:arrayStrings[i], lengthofOriginalString:arrayStrings[i].length};
    }
    return arrayObjects;
}






// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"

function arrayOfObjectsToStrings(arrayOfObjects){
        var results = []
    arrayOfObjects.foreach(function (objects){
        results.push(objects.originalString)
    })
}



// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.

// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//
var people = [personOne,personTwo,personThree];

function getTallUsers(arrayOfObjects) {

    var tallUsers = [];

    for (let i = 0; i < arrayOfObjects.length; i++) {
        //console.log(arrayOfObjects[i])

        var currentUser = arrayOfObjects[i];

        var currentUsersHeight = currentUser.heightInInches;

        if (currentUsersHeight >= 65) {
            tallUsers.push(currentUser)
        }


    }
    return tallUsers;
}


console.log(getTallUsers(people));











