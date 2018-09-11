/******************************************
  
                Exercise 1
 
******************************************/

function min(a,b) {
    if (a > b){
        return b
    }
    else  {
        return a
    }
}

console.log(min(0, 10));
console.log(min(0, -10));

/* This is a fairly simple function, the min function takes parameters a and b, and whichever one is found
to be the minimum is returned as the output in the console.log function */

/*********************************************
  
                Exercise 3
  
 *********************************************/
/* Step One- making it work for a specific string */
// const myString = "BaraBBas";
// let counter = 0;
// for (let i = 0; i < myString.length; i++){
//     if (myString[i] == "B"){
//         counter++;
//     }
// }
// console.log(counter);

/* Step 2- Encapsulate into a general function-- This is my solution */
function countBs(string, char){
    let counter = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i]  == char){
            counter++;
        }
    }
    return counter;
}

console.log(countBs("BlaBBermouthButts", "B"));
