// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('javierlm');

// Create a new document in the collection.
db.getCollection('movies').insertMany([
    {"title":"The Great Gatsby", "writer":"F. Scott Fitzgerald","year":"2013", "actors":["Leonardo di Caprio","Tobey Maguire"]},
    {"title":"Forrest Gump", "writer":"Winston Groom", "year":"1994", "actors":["Tom Hanks","Gary Sinise"]},
    {"title":"Fight Club", "writer":"Chuck Palahniuk", "year":"1999", "actors":["Brad Pitt", "Edward Norton", "Helena Bonham"]},
    {"title":"The Fellowship of the Ring", "writer":"J. R. R. Tolkien", "year":"2001","franchise":"The Lord of the Rings"},
    {"title":"The Two Towers", "writer":"J. R. R. Tolkien", "year":"2002","franchise":"The Lord of the Rings"},
    {"title":"The Return of the King", "writer":"J. R. R. Tolkien", "year":"2003","franchise":"The Lord of the Rings", "sinopsis":"This film closes the adventures of Frodo and his friends"},
    {"title":"Citizen Kane"},
    {"title":"Kill Bill"}

]);
//Get all documents
db.getCollection('movies')
  .find(
    {
     
    
  });

//Get all documents with writer set to "J.R.R. Tolkien"
db.getCollection('movies')
  .find(
    {
     "writer":"J. R. R. Tolkien"
    
  });

//Get all documents where actors include "Brad Pitt"
db.getCollection('movies')
  .find(
    {
     "actors":"Brad Pitt"
    
  });

//Get all documents with franchise set to "The Lord of the Rings"
db.getCollection('movies')
  .find(
    {
     "franchise":"The Lord of the Rings"
    
  });

  