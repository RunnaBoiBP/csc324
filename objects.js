// const car = {
//     price: 55000,
//     model: "tesla",
//     makeNoise: function(noise) {
//         console.log(`The ${this.model} goes ${noise}.`);
//     }
// };

// //car.makeNoise("shhhh");

// car.price = 40000
// ///console.log(car);

// let car2 = car;
// car.price = 50000;
// ///console.log(car2.price);


// // This won't  always work though, see below. Here x and y are actually independent values
// let x = 7;
// let y = x;
// x += 3;
// //console.log(y);
// //console.log(x);


// //Arrays-- a special type of object
// const beans = [15, 3, 7, 8];
// function beanSort(a, b) {
//     if (a>b) return 1;
//     if (a<b) return -1;
//     return 0;
// }
// //console.log(beans[2]);

// ///for (elem in beans) {
// ///    console.log(elem);
// ///}



// ///console.log(beans.length);
// ///console.log(beans.hasOwnProperty("length"));
// ///beans.math = -3;
// ///for (elem in beans){
// //    console.log(elem);
// ///}

// ///const start = 0;
// ///console.log(beans[start]);
// ///console.log(beans[start + 2]);
// ///console.log(car["price"]);

// const cars = [
//     {
//      price: 55000,
//      model: "lexus",
//      made: "2018-09-04"
//     },
//     {
//      price: 95000,
//      model: "corvette",
//      made: "2020-01-01"
//     },
//     {
//      price: 150000,
//      model: "tesla",
//      made: "2017-10-31"
//     }
// ];

// function byPrice(a, b) {
//     if (a.price > b.price) return 1;
//     if (a.price < b.price) return -1;
//     return 0;
// }

// console.log(cars.sort(byPrice));

// function byDate(a,b) {
//     const aDate = new Date(a.made),
//           bDate = new Date(b.made);
//     if (aDate > bDate) return 1;
//     if (bDate < bDate) return -1;
//     return 0;
// }

// console.log(cars.sort(byDate));


/* Array Push and Pop Operations */
// myArray = [4, 5, 6, 7];
// myArray.push(22);
// console.log(myArray);
// let myNum = myArray.pop();
// console.log(myNum);
// console.log(myArray);
// console.log(myArray.unshift(37));
// console.log(myArray);

// /* Combines two arrays and sorts them in descending order */
// arr2 = [6, 7, 8, 9];
// console.log(myArray
//     .concat(arr2)
//     .sort(
//         (a,b)=>{return a < b ? 1 : -1;}
//     ));


const cars = [
    {
     price: 55000,
     model: "lexus",
     made: "2018-09-04"
    },
    {
     price: 95000,
     model: "corvette",
     made: "2020-01-01"
    },
    {
     price: 150000,
     model: "tesla",
     made: "2017-10-31"
    }
];

let myRandNum = cars.length * Math.random();
let car = cars[Math.floor(myRandNum)];
console.log(car.model);