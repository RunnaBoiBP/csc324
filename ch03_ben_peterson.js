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

console.log("Exercise 1: Minimum");
console.log("Return the minimum value between a pair of given values.");
console.log("The minimum between the pair (0, 10) is:", min(0, 10));
console.log("The minimum between the pain (0, -10) is:", min(0, -10));
console.log(" ");

/* This is a fairly simple function, the min function takes parameters a and b, and whichever one is found
to be the minimum is returned as the output in the console.log function */

/*********************************************
  
                Exercise 2
 
**********************************************/

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}

console.log("Exercise 2: Recursion");
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(525,600));
console.log(" ");

/*********************************************
  
                Exercise 3
  
 *********************************************/
/* Step One- making it work for a given string to count the number of Bs*/

function countBs(string){
    const char = "B";
    let counter = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i]  == char){
            counter++;
        }
    }
    return counter;
}

console.log("Exercise 3: Bean Counting");
console.log("Step One");
console.log("Return the number of capitalized Bs in a string");
console.log("In the given string , the number of desired characters is:",
            countBs("Ben Bodaciously Bounced along the Beautiful Boardwalk."));
console.log(" ");

/* Step 2- Encapsulate into a general function-- This is my solution */

function countChars(string, char){
    const strLower = string.toLowerCase();
    const charLower = char.toLowerCase();
    let counter = 0;
    for (let i = 0; i < strLower.length; i++){
        if (strLower[i]  == charLower){
            counter++;
        }
    }
    return counter;
}

console.log("Step Two");
console.log("Return the number of requested letters caps or lower case.");
console.log("In the given string, the number of desired characters is: ",
            countChars("BlaBbermouthButtBaby", "B"));