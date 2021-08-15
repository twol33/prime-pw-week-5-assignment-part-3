console.log('***** Music Collection *****')
let collection = []

function addToCollection(title, artist, yearPublished){
  if( collection.length <= 0)
  collection.push( title, artist, yearPublished)
  let musicBox = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  return musicBox;
}
console.log('adding first album:', addToCollection('Budda', 'James Pollock', '2021'));
