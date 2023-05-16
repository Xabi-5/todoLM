/* global use, db */
// MongoDB Playground
use('javierlm');

db.getCollection('dance').distinct(
  "name"
);

db.getCollection('dance').distinct(
  "name",{"price":{"$gt":40}}
);

db.getCollection('dance').find().sort(
  {
    "name":1
  }
);

db.getCollection('dance').find(
  {
    "name":"Pasodoble"
  }
);

db.getCollection('dance').distinct(
  "name",{"teacher":{"$regex":"Lozano"}}
);

db.getCollection('dance').find().limit(3);

