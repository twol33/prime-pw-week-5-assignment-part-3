console.log('***** Music Collection *****')

// addToCollection function start
let collection = []

function addToCollection(title, artist, yearPublished){
  let musicBox = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push( musicBox )
  return musicBox;
}
console.log('Only I: ', addToCollection('Budda', 'James Pollock', '2021'));
console.log('Can Tell: ', addToCollection('On', 'Arthur King', '2020'));
console.log('The Best: ', addToCollection('My', 'Bruce Waters', '2019'));
console.log('Way To: ', addToCollection('Sweet', 'Martha Soup', '2018'));
console.log('Eat: ', addToCollection('Yellow', 'Garth Creek', '2017'));
console.log('Roasted Corn: ', addToCollection('Corn', 'Joe Penninsula', '2016'));

console.log(collection);
// addToCollection function completed

// showCollection function start
function showCollection( title ) {
  console.log( 'Items in array: ', collection.length );

  for( x=0; x < collection.length; x++ ){
  console.log( collection[x].title, '-' , 'by, ', collection[x].artist, ',' , 'year: ', collection[x].yearPublished);
  }
}
showCollection()
// showCollection function completed

// findByArtist function start

let nameList = []

function findByArtist( artist ){
  for( i=0; i<collection.length; i++)
  if( artist === collection[i].artist){
  nameList.push( collection[i] )
  return nameList ;
}
  else{
    return nameList = [];
  }
}

console.log('Find James Pollock', findByArtist('James Pollock'));
console.log('Find Michael Bay', findByArtist('Michael Bay'));
