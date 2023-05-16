use('javierlm');

db.createCollection('library');
db.getCollection('library').insertMany();

db.getCollection('library').find({"author.surname" : "Stevens"});

db.getCollection('library').find({"price" : {$gt:20}});

db.getCollection('library').find({"title" : /"Web"/}); 

db.getCollection('library').find(
    {$or:
    [ {"title" : /web/},
        {"title" : /TV/}]
    });

db.getCollection('library').find(
    {$or:
    [ {"title" : /web/},
    {"title" : /TV/i}]
    });

