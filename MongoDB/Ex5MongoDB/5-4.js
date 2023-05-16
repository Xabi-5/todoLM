use('javierlm');

db.getCollection('orders').find({
    $or:[{"paid" : "N", "year" : {"$gte":2020}}]
}
);