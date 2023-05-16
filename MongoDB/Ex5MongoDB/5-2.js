use('javierlm');

db.getCollection('orders').find(
    {"paid" : "Y"}
);

