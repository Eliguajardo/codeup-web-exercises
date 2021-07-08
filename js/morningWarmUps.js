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
    return ${formatName(this.firstName)} ${formatName(this.lastName)};
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



