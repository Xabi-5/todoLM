/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('javierlm');

// Search for documents in the current collection.
db.getCollection('bookstore')
  .distinct("title",
    {
      "price":{"$lt":30}
    }
   );
