console.log('***** Music Collection *****')

let collection = []

function addToCollection(title, artist, yearPublished){
  let musicBox = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push( musicBox)
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

//Add a function named showCollection. This function should:

//Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//Console.log the number of items in the array.
//Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

function showCollection( title ) {
  console.log( 'Items in array: ', collection.length );

  for( x=0; x < collection.length; x++ ){
  console.log( collection[x].title, '-' , 'by, ', collection[x].artist, ',' , 'year: ', collection[x].yearPublished);
  }
}
showCollection()
