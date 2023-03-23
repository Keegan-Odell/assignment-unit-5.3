console.log('***** Music Collection *****');

// variables
let collection = [];
let artistArray = [];
let searchArray = [];

// functions
function addToCollection(title, artist, yearPublished, tracks) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  };
  collection.push(album);
  return album;
}

function showCollection(array) {
  console.log(`you have ${array.length} records in your collection`);

  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist}, published ${array[i].yearPublished}`);
  }
}

function findByArtist(artist) {
  for (let i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist) {
      artistArray.push(collection[i]);
    }
  }
  return artistArray;
}

function search(input1, input2) {
  for (let i = 0; i < collection.length; i++) {
    if (input1 === collection[i].artist && input2 === collection[i].yearPublished) {
      searchArray.push(collection[i]);
      return;
    } else if (input1 === undefined && input2 === undefined) {
      searchArray = collection;
    }
  }
  return searchArray;
}
//adding to collection
addToCollection('By The Way', 'Red Hot Chili Peppers', 2002, ['Tear: 5:17', 'Minor Thing: 3:38', 'By The Way: 3:38']);
addToCollection('Sign "O" the Times', 'Prince', 1987, ['Adore: 6:30', 'Housequake: 4:42', 'Sign o the Times: 4:57']);
addToCollection('1999', 'Prince', 1982);
addToCollection('Mellon Collie and the Infinite Sadness', 'Smashing Pumpkins', 1995);
addToCollection('Songs for the Deaf', 'Queens of the Stone Age', 2002);
addToCollection('Madvillainy', 'Madvillain', 2004);

// console.log checks
console.log('-----------adding albums---------');
console.log(`Added, ${collection[0].title} by the ${collection[0].artist}`);
console.log(`Added, ${collection[1].title} by the ${collection[1].artist}`);
console.log(`Added, ${collection[2].title} by the ${collection[2].artist}`);
console.log(`Added, ${collection[3].title} by the ${collection[3].artist}`);
console.log(`Added, ${collection[4].title} by the ${collection[4].artist}`);
console.log(`Added, ${collection[5].title} by the ${collection[5].artist}`);
console.log('------------showCollection Function---------');
showCollection(collection);
console.log('------------findByArtist Function-----------');
findByArtist('Foo Fighters');
console.log(artistArray);
findByArtist('Prince');
console.log(artistArray);
findByArtist('Smashing Pumpkins');
console.log(artistArray);
console.log('---------------------stretch goal-------------------');
// search();
// console.log(searchArray);
search('Prince', 1982);
console.log(searchArray);
console.log('----------------------------------------------------');
console.log(collection);
