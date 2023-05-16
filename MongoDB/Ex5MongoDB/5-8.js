use('javierlm');

db.getCollection('orders').find({
    "items.quantity":{$lt:15}
}
);