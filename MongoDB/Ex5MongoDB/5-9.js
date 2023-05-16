use('javierlm');

db.getCollection('orders').find({
    "items.colours" : "blue"
}
);