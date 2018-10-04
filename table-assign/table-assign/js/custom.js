/********************************************************************
 * 
 * Requests a JSON file that gives information about Bhangra artists
 * It processes the objects into an array and then places the
 * artists into the rows of a table
 * 
 *******************************************************************/

// This function will process the data after it is received.

function processArray(artists) {
  let contents = "";

  artists.forEach(function(artist) {
    contents += `<li>${artist.name}</li>`;
  });

  const tab = document.querySelector("#bhangra");
  tab.innerHTML = contents
}

// Here is the request, with a handler function

fetch('data/artists.json')
  .then(function(response){
    let stuff = response.json();
    return stuff
  })
  .then(function(artists){
    let arr = [];
    for (abbr in artists) {
      arr.push(artists[abbr]);
    }
  processArray(arr);
  });
  