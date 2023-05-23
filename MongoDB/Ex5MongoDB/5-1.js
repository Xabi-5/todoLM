use('javierlm');

db.getCollection('orders').find();

db.getCollection('orders').find(
    {"paid" : "Y"}
);

db.getCollection('orders').find(
    {"paid" : "Y", "year" : {"$lt":2020}}
);

db.getCollection('orders').find({
    $or:[{"paid" : "N", "year" : {"$gte":2020}}]
}
);

db.getCollection('orders').find({
    "cost.currency":"NOK"
 }
);

db.getCollection('orders').find({
    $and:[{"cost.currency":"NOK"},{"cost.price":{$lt:20}}]
}
);

db.getCollection('orders').find({
    $and:[{"cost.currency":"NOK"},{"cost.price":{$lt:20}}]
}
);

db.getCollection('orders').find({
    "items.product":p2
}
);

db.getCollection('orders').find({
    "items.quantity":{$lt:15}
}
);

db.getCollection('orders').find({
    "items.colours" : "blue"
}
);

db.getCollection('orders').find({},{"order":1, "year":1,"_id":0});

db.getCollection('orders').find({"year":2022},{"order":1,"year":1,"delivery_days":1,"_id":0});

