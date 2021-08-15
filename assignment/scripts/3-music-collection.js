console.log('***** Music Collection *****')
let collection = []

let 
function addToCollection(title, artist, yearPublished){
  if( collection.length <= 0)
  collection.push(title, artist, yearPublished)
  return collection;
}
console.log('adding first album:', addToCollection('Budda', 'James Pollock', '2021'));
