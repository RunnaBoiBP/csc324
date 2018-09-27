/********************************************************************
 * 
 * Your introductory remarks go here.
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


 // complete with code to select and populate the table

let paragraph = document.querySelector("#names");

 let list = document.createElement("ul");
 list.innerHTML = "";
 for (let i = 0; i < artists.length; i++) {
   let artist = artists[i];
   list.innerHTML += `<li>${artist.name}</li>`;
 }
 paragraph.appendChild(list);

const linkParagraph = document.querySelector("#list");
const list2 = document.createElement("ul");
artists.forEach(function(artist) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.href = artist.link;
  anchor.innerHTML = artist.name;
  listItem.appendChild(anchor);
  list2.appendChild(listItem);
});
linkParagraph.appendChild(list2)
//The assignment is going to involve creating table rows instead of list items
