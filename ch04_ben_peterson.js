/*******************************************************************************
 
                            Exercise 1- Sum and Range
 
 *******************************************************************************/

//Write a range function that takes two arguments, start and end, 
//and returns an array containing all the numbers from start up to (and including) end.
//Next, write a sum function that takes an array of numbers and returns the sum
//of these numbers.

//First, I need to define a range function with start and end parameters,
//and create an empty array.
function range(start, end, step = start < end ? 1 : -1) {
    let rngSumArray = [];
    //next, I probably need a loop that pushes the values to the array from start to 
    //end, as long as start is less than end.
    if (step > 0) {
        for (let i = start; i <= end; i += step) rngSumArray.push(i);
    }
    else {
        for (let i = start; i >= end; i += step) rngSumArray.push(i);
    }
    return rngSumArray;
}

//Next, I need to make a sum function that takes an array and returns the sum
//of the numbers in the array.

function sum(rngSumArray) {
    let total = 0;
    for (let value of rngSumArray) {
      total += value;
    }
    return total;
  }
  
//Here is the code to test my functions out

console.log("Running the Range function...");
console.log(range(1,10));
console.log(" ");

console.log("Here is a second example of the range function to test...");
console.log(range(5, -3, -1));
console.log(" ");

console.log("Moving on to the sum function...");
console.log(" ");

console.log("Running the Sum function...");
console.log(sum(range(1,10)));
console.log(" ")

console.log("Here is another example of my sum function using the second range");
console.log(sum(range(5, -3, -1)));
console.log(" ");

/*******************************************************************************
 
                        Exercise 2- Reversing an Array
 
 *******************************************************************************/

//Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray,
//takes an array as argument and produces a new array that has the same elements in 
//the inverse order. The second, reverseArrayInPlace, does what the reverse method 
//does: it modifies the array given as argument by reversing its elements. Neither 
//may use the standard reverse method.

//First, here is the code for the reverseArray function that will return an array
//with the initial array's elements in reverse order.
function reverseArray(initArray) {
    let revArray = [];
    for (let i = initArray.length - 1; i >= 0; i--) {
      revArray.push(initArray[i]);
    }
    return revArray;
  }

//The code is pretty straight forward I think, I have an initial array that I 
//called initArray which then gets pushed in reverse order to revArray. The following
//output code will show this method.

console.log("Here is the code for the reverseArray function...");
console.log(" ");
console.log("First, the initial array:");
console.log("['B', 'E', 'N']");
console.log(" ");
console.log("Now, for the reversal:");
console.log(reverseArray(["B", "E", "N"]));
console.log(" ");

//As you can see, the array containing the letters of my name in order gets returned
//in reverse order, going from ["B", "E", "N"] to ["N", "E", "B"].

//Now, the code for the reverseArrayInPlace function, which will instead of creating
//a new array with elements reversed from the initial, it will modify the existing
//array by reversing its elements.

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
      }
      return array;
}

//This function uses a for loop again, but this time it assigns the existing element
//to a variable, old, and then assigns ot to a new spot in the opposite position from 
//the original array.

console.log("Here is the code for the reverseArrayInPlace function...");
console.log(" ");
let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("First, the initial array:");
console.log(arrayValue);
console.log(" ");
console.log("Now, the reversed array");
console.log(reverseArrayInPlace(arrayValue));
