const square = 10;
function myFun(a) {
    const square = a*a;
    return square;
}

console.log(myFun(5));
console.log(`The square of 5 is ${myFun(5)} and square is ${square}.`);


for (let i=4;i>=1;i--){
    console.log("a".repeat(i));
}

/************************************************
 * long way to do it
 * 
 ************************************************/
for (let i=6;i>=2;i=i-2){
    console.log("a".repeat(i));
}
for (let i=4;i<=6; i=i+2){
    console.log("a".repeat(i));
}


/*************************************************
 * 
 * Faster way to do it
 * 
***************************************************/

const lineLengths = [6,4,2,4,6];
for (let i=0;i<lineLengths.length;i++){
    console.log("a".repeat(lineLengths[i]));
}

const horn = () => {
    console.log("Toot");
};

console.log(horn());

function power(base, exponent) {
    console.log(`Exponent is ${exponent}`);
    if (exponent == 0) {
      console.log("Finally I know the answer!");
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(2, 2000));