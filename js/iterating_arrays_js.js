(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var name = ["melinda", "janie", "vero", "lisa"];
    console.log(name.length);

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    var name = ["melinda, janie, vero, lisa, "];
    console.log('name: [0]');
    console.log('name: [1]');
    console.log('name: [2]');
    console.log('name: [3]');

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    var name = ['melinda', 'janie', 'vero', 'lisa', ];
    console.log('There are ' + name.length + ' name in the array');
    console.log('the first name is:' + name[0]);
    console.log('the second name is:' + name[1]);
    console.log('the third name is:' + name[2]);
    console.log('the forth name is:' + name[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    var name = ['melinda', 'janie', 'vero', 'lisa', ];
    for (var i = 0; i < name.length; i++) {
        console.log('The name at index ' + i + ' is: ' + name[i]);
    }

    console.log("")

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    var name = ['melinda', 'janie', 'vero', 'lisa', ];
    name.forEach(function(name) {
        console.log('Here is: ' + name + '.');
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array){
        return array[0];
    }

    function second(array){
        return array[1];
    }

    function last(array) {
        return array[array.length -1 ];
    }

    console.log(first([1, 2, 3, 4, 5]));
    console.log(second([1, 2, 3, 4, 5]));
    console.log(last([1, 2, 3, 4, 5]));


})();