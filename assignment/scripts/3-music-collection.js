console.log('***** Music Collection *****');

// variables
let collection = [];

// functions
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
}
//adding to collection
addToCollection('By The Way', 'Red Hot Chili Peppers', 2002);
addToCollection('Sign "O" the Times', 'Prince', 1987);
addToCollection('1999', 'Prince', 1982);
addToCollection('Mellon Collie and the Infinite Sadness', 'Smashing Pumpkins', 1995);
addToCollection('Songs for the Deaf', 'Queens of the Stone Age', 2002);
addToCollection('Madvillainy', 'Madvillain', 2004);

// console.log checks
console.log(`Added, ${collection[0].title} by the ${collection[0].artist}`);
console.log(`Added, ${collection[1].title} by the ${collection[1].artist}`);
console.log(`Added, ${collection[2].title} by the ${collection[2].artist}`);
console.log(`Added, ${collection[3].title} by the ${collection[3].artist}`);
console.log(`Added, ${collection[4].title} by the ${collection[4].artist}`);
console.log(`Added, ${collection[5].title} by the ${collection[5].artist}`);
console.log(collection);
