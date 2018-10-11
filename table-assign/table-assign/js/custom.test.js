/********************************************************************
 * 
 * Requests a JSON file that gives information about Bhangra artists
 * It processes the objects into an array and then places the
 * artists into the rows of a table
 * 
 *******************************************************************/

// This function will process the data after it is received.

let george = [];
let bob = 3;

function processArray(artists) {
  let contents = "";

  artists.forEach(function(artist) {
    contents += `<li>${artist.name}</li>`;
  });

  const tab = document.querySelector("#bhangra");
  tab.innerHTML = contents;
}

// Here is the request, with a handler function

fetch('data/artists.json')
  .then(function(response){
    let stuff = response.json();
    return stuff;
  })
  .then(function(artists){
    let arr = [];
    for (abbr in artists) {
      arr.push(artists[abbr]);
      george.push(artists[abbr]);
      console.log(bob);
    }
  processArray(arr);
  });

  console.log(george[0]);

  // a button to show a randomly selected artist
// const randomButton = document.querySelector("#random-button");
// randomButton.addEventListener("click", showRandomArtist);

// function showRandomArtist() {
//   const artist = document.querySelector("#random-artist");
//   artist.innerHTML = pickArtist();
// }


 //A method to shuffle an array
//  Array.prototype.shuffle = function() {
//   let input = this;
//   for (let i = input.length-1; i >= 0; i--) {
//     let randomIndex = Math.floor(Math.random()*(i+1));
//     let itemAtIndex = input[randomIndex];
//     input[randomIndex] = input[i];
//     input[i] = itemAtIndex;
//   }
//   return input;
// };

// const myArray = [1,2,3,4,5,6,7,8,9,10];
// console.log(myArray.shuffle());
// console.log(artists.shuffle());
