/***********************************************************************
 
                    Exercise 1- Flattening

************************************************************************/
//Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements of the
//original arrays.

//Well, this one is really straightforward, so basically you just use
//array.reduce to pass the current array in the function to combine the parts into
//a whole and then the combined array is just a concat of the current array.

//Array example from the book:
let arrays = [[1, 2, 3], [4, 5], [6]];

//Now my code to combine these into one array:
console.log("Exercise 1- Flattening");
console.log(" ");
console.log("Here are the arrays I wish to combine: ");
console.log(arrays);
console.log(" ");
console.log("Now, Here is the flattened array using the reduce and concat method:");
console.log(arrays.reduce((combined, current) => combined.concat(current), []));
console.log(" ");



/***********************************************************************
 
                    Exercise 2- Write Your Own Loop

************************************************************************/
//Write a higher-order function loop that provides something like a for
//loop statement. It takes a value, a test function, an update function, 
//and a body function. Each iteration, it first runs the test function on
//the current loop value and stops if that returns false. Then it calls the
//body function, giving it the current value. Finally, it calls the update 
//function to create a new value and starts from the beginning.

//This one was a bit harder, but basically we are writing a for loop without
//the for. The exercise is fairly self explanatory, it was just hard to figure
//out the logistics for coding it. It takes a start value, a test function to
//see if the current value returns true or false. Then assigns the current value
//to the body function. And then finaly uses the update function to make a new
//value and start the process over again.

function myLoop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
}

//I believe this function should do the required tasks, but here is the code
//to test it out and see:

console.log("Exercise 2- Write your own loop");
console.log(" ");
console.log("Here is the output for the myLoop function, which should count down from 3 to 1.");
myLoop(3, n => n > 0, n => n - 1, console.log);
console.log("As you can see, the function works as expected.");
console.log(" ");



/***********************************************************************
 
                    Exercise 3- Everything

************************************************************************/
//Analogous to the some method, arrays also have an every method. This one 
//returns true when the given function returns true for every element in the 
//array. In a way, some is a version of the || operator that acts on arrays, 
//and every is like the && operator.

//Implement every as a function that takes an array and a predicate function 
//as parameters. Write two versions, one using a loop and one using the some 
//method.

//First, the every method as a loop:

function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
}

console.log("Exercise 3- Everything");
console.log(" ");

console.log("Here is the output for running the every method as a loop, with the commented every functions.");
console.log("//every([1, 3, 5], n => n < 10)");
console.log(every([1, 3, 5], n => n < 10));
console.log(" ");
console.log("//every([2, 4, 16], n => n < 10)");
console.log(every([2, 4, 16], n => n < 10));
console.log(" ");
console.log("//every([], n => n < 10)");
console.log(every([], n => n < 10));
console.log(" ");


//Second, the every method using the some method. I had to look at the solution for
//this one because I couldn't quite figure the code out. But I understand the way it
//works now.
function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}
