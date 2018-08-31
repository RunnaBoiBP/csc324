/*****************************************
 * 
 * Exercise 1
 * 
 ****************************************/

 for (let i=1;i<=7;i++){
     console.log("#".repeat(i));
 }

 /****************************************
  * 
  * Exercise 2
  * 
  ****************************************/

  /* Well, for starters I probably need a for loop with n going from 1 to 100. Then I should
  * probably have the count of n go up each iteration of the loop. Then, if n is divisible by 3, it
  * should print "Fizz", and if n is divisible by 5, it should print "Buzz". The hint says that the ||
  * operator should be used, and when I googled it I came across using it in the console.log function
  * to show the number or words depending on if it is divisible or not. */

  for (let n=1; n<=100;n++){
      let output = "";
      if (n%3==0) output += "Fizz";
      if (n%5==0) output += "Buzz";
      console.log(output||n);
  }

/******************************************
*
* Exercise 3
*
*******************************************/

let size = 8;

let chessboard = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
}
console.log(chessboard);

/*For exercise 3, the idea is to set the size to 8 so that you get the 8x8 chessboard, and then have
the loop check to see if i+j is an even or odd number in the sequence. So for ever other space and
every other row, it will print a # or space depending on if the corresponding value is divisible by
2. So as the loop iterates, you should get an 8x8 chessboard. */