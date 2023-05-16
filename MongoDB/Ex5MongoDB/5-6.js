use('javierlm');

db.getCollection('orders').find({
    $and:[{"cost.currency":"NOK"},{"cost.price":{$lt:20}}]
}
);