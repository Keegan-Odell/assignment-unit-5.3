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
    for (let k = 0; k < collection[i].tracks.length; k++) {
      console.log(`${k + 1}. ${collection[i].tracks[k]}`);
    }
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

function search(input1, input2, input3) {
  for (let i = 0; i < collection.length; i++) {
    if (input1 === collection[i].artist && input2 === collection[i].yearPublished) {
      searchArray.push(collection[i]);
      return;
    } else if (input1 === undefined && input2 === undefined && input3 === undefined) {
      searchArray = collection;
    } else if (input1 != undefined && input2 === undefined && input3 === undefined) {
      for (let k = 0; i < collection[i].tracks.length; k++) {
        if (input1 === collection[i].tracks[k]) {
          console.log(collection[i].tracks[k]);
          return;
        }
      }
    }
  }
  return searchArray;
}
//adding to collection
addToCollection('By The Way', 'Red Hot Chili Peppers', 2002, ['Tear: 5:17', 'Minor Thing: 3:38', 'By The Way: 3:38']);
addToCollection('Sign "O" the Times', 'Prince', 1987, ['Adore: 6:30', 'Housequake: 4:42', 'Sign o the Times: 4:57']);
addToCollection('1999', 'Prince', 1982, ['Lady Cab Drive: 8:19', 'Little Red Corvette: 5:03', 'Delirious: 4:01']);
addToCollection('Mellon Collie and the Infinite Sadness', 'Smashing Pumpkins', 1995, ['Tonight, Tonight: 4:15', 'Take Me Down: 2:52', 'Zero: 2:40']);
addToCollection('Songs for the Deaf', 'Queens of the Stone Age', 2002, ['Six Shooter: 1:19', 'Do It Again: 4:05', 'Go with the Flow: 3:07']);
addToCollection('Madvillainy', 'Madvillain', 2004, ['Raid: 2:31', 'The Illest Villians: 1:56', 'Accordion: 1:59']);

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
console.log('---------------------stretch goal search----------------');
// search();
// console.log(searchArray);
search('Prince', 1982);
console.log(searchArray);
console.log('---------------------stretch goal tracks------------');
// console.log(collection);
// console.log(collection[1].tracks.length);
search('Minor Thing: 3:38');
console.log('----------------------------------------------------');
console.log(collection);
