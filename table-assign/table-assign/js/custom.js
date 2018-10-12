/********************************************************************
 * 
 * The following code creates an HTML table for a list of Bhangra
 * Artists and adds it to an index.html file
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ]


// A function to generate the table's inner HTML
function createBhangraTable(array) {
  let contents =
  `
  <tr>
    <th>Name</th>
    <th>Date of Birth</th>
    <th>Link</th>
  </tr>
  `;
  artists.forEach(function(artist) {
      contents += "<tr>";
      contents += `<td>${artist.name}</td>`;
      contents += `<td>${artist.birthYear}</td>`;
      contents += `<td><a href="${artist.link}">${artist.link}</a></td>`;
  });
  return contents;
}

const tab = document.querySelector("#bhangra");
tab.innerHTML = createBhangraTable(artists);

 //A function to sort artists by name
 function byName(a, b) {
   if (a.name < b.name) return -1;
   if (a.name > b.name) return 1;
   return 0;
 }

// A call to the sort function when the name button is clicked
const nameSortButton = document.querySelector("#name-button");
nameSortButton.addEventListener("click", function() {
  const tab = document.querySelector("#bhangra");
  tab.innerHTML = createBhangraTable(artists.sort(byName));
});

//A method to shuffle an array
Array.prototype.shuffle = function() {
  let input = this;
  for (let i = input.length-1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random()*(i+1));
    let itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
};

// A call to the shuffle method to sort in random order
const randomizeButton = document.querySelector("#random-button");
randomizeButton.addEventListener("click", function() {
  const tab = document.querySelector("#bhangra");
  tab.innerHTML = createBhangraTable(artists.shuffle());
});

// a button to sort the artist by date
function byYear(a, b) {
  if (a.birthYear < b.birthYear) return -1;
  if (a.birthYear > b.birthYear) return 1;
  return 0;
}

// A call to the byYear function to sort the artists by birth date
const dateSortButton = document.querySelector("#date-button");
dateSortButton.addEventListener("click", function() {
  const tab = document.querySelector("#bhangra");
  tab.innerHTML = createBhangraTable(artists.sort(byYear));
});