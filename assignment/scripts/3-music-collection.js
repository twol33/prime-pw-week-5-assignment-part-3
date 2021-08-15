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
console.log('Album 1: ', addToCollection('Budda', 'James Pollock', '2021'));
console.log('Album 2: ', addToCollection('On', 'Arthur King', '2020'));
console.log('Album 3: ', addToCollection('My', 'Bruce Waters', '2019'));
console.log('Album 4: ', addToCollection('Sweet', 'Martha Soup', '2018'));
console.log('Album 5: ', addToCollection('Yellow', 'Garth Creek', '2017'));
console.log('Album 6: ', addToCollection('Corn', 'Joe Penninsula', '2016'));

console.log(collection);
