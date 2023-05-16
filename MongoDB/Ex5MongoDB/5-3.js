use('javierlm');

db.getCollection('orders').find(
    {"paid" : "Y", "year" : {"$lt":2020}}
);